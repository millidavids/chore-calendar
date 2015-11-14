class HomeController < ApplicationController
  before_action :authenticate_user!
  respond_to :html

  # GET /
  def index
    @current_day = Time.now.wday
    @calendar = current_user.calendar
    unless @calendar.make_current
      render text: 'Failed to update calendar to today: ' +
                   "#{@calendar.errors.full_messages.join(', ')}."
      return
    end
    @week = @calendar.get_week_hash(@current_day)
    @person_list = @calendar.get_person_hash
    respond_with @week.to_json, @current_day, @person_list
  end
end
