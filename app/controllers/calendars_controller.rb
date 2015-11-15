class CalendarsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_calendar
  before_action :set_current_day
  respond_to :html, :json

  # GET /
  def index
    unless @calendar.make_current
      render text: 'Failed to update calendar to today: ' +
                   "#{@calendar.errors.full_messages.join(', ')}."
      return
    end
    @week = @calendar.get_week_hash(@current_day)
    @people = @calendar.get_person_hash
    @exemptions = @calendar.exemptions_by_day
    respond_with @week.to_json, @current_day, @people
  end

  # POST /calendars/people/switch
  def switch_people
    people_ids = params[:people_ids]
    unless people_ids.present? && people_ids.size == 2
      render json: {error: 'Please provide a list of two Person IDs in the ' +
                           'people_ids parameter.'}, status: :bad_request
      return
    end
    person_id1, person_id2 = people_ids.map(&:to_i)
    person_index1 = @calendar.person_order.index(person_id1)
    person_index2 = @calendar.person_order.index(person_id2)
    order = @calendar.person_order
    order[person_index1] = person_id2
    Rails.logger.info order.inspect
    order[person_index2] = person_id1
    @calendar.person_order = order
    if @calendar.save
      render json: {
        week: @calendar.get_week_hash(@current_day),
        people: @calendar.get_person_hash
      }
    else
      render json: {error: 'Could not save calendar: ' +
                           "#{@calendar.errors.full_messages.join(', ')}."},
             status: :unprocessable_entity
    end
  end

  # GET /ical.ics
  def ical
    cal = Icalendar::Calendar.new

    @calendar.get_week_hash(@current_day).each do |day, person|
      start = Chronic.parse("#{day} at 8am")
      stop = Chronic.parse("#{day} at 5pm")

      # tzid = "America/Louisville"
      # tz = TZInfo::Timezone.get tzid
      # timezone = tz.ical_timezone start
      # cal.add_timezone timezone

      cal.event do |e|
        e.dtstart     = start
        e.dtend       = stop
        e.summary     = "It's #{person}'s chore day"
        e.description = "Remember to do your chores!"
      end
    end

    send_data cal.to_ical, filename: 'chores.ics'
  end

  private

  def set_calendar
    @calendar = current_user.calendar
  end

  def set_current_day
    @current_day = Time.now.wday
  end
end
