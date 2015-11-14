class CalendarsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_calendar
  respond_to :html, :json

  # GET /
  def index
    @current_day = Time.now.wday
    unless @calendar.make_current
      render text: 'Failed to update calendar to today: ' +
                   "#{@calendar.errors.full_messages.join(', ')}."
      return
    end
    @week = @calendar.get_week_hash(@current_day)
    @person_list = @calendar.get_person_hash
    respond_with @week.to_json, @current_day, @person_list
  end

  # POST /calendars/people/switch
  def switch_people
    people_ids = params[:people_ids]
    unless people_ids.present? && people_ids.size == 2
      render json: {error: 'Please provide a list of two Person IDs in the ' +
                           'people_ids parameter.'}, status: :bad_request
      return
    end
    person_id1, person_id2 = people_ids
    person_index1 = @calendar.person_order.index(person_id1)
    person_index2 = @calendar.person_order.index(person_id2)
    @calendar.person_order[person_index1] = person_id2
    @calendar.person_order[person_index2] = person_id1
    if @calendar.save
      render json: @calendar.get_person_hash
    else
      render json: {error: 'Could not save calendar: ' +
                           "#{@calendar.errors.full_messages.join(', ')}."},
             status: :unprocessable_entity
    end
  end

  private

  def set_calendar
    @calendar = current_user.calendar
  end
end
