class HomeController < ApplicationController
  before_action :authenticate_user!
  before_action :set_current_day, only: [:index]
  before_action :set_calendar, only: [:index]
  before_action :set_week, only: [:index]
  respond_to :html

  # GET /
  def index
    respond_with @week.to_json, @current_day, @person_list
  end

  private

  def set_calendar
    @cal = Calendar.first
    @cal.make_current
  end

  def set_week
    monday_index = @cal.current_day_id + 1 - @current_day
    @week = {monday: Person.find(@cal.person_order[monday_index]).name,
             tuesday: Person.find(@cal.person_order[monday_index + 1]).name,
             wednesday: Person.find(@cal.person_order[monday_index + 2]).name,
             thursday: Person.find(@cal.person_order[monday_index + 3]).name,
             friday: Person.find(@cal.person_order[monday_index + 4]).name}
  end

  def set_current_day
    @current_day = Time.now.wday
  end

  def person_list
    @person_list = @cal.person_order.map { |i| [Person.find(i).name, i] }
  end
end
