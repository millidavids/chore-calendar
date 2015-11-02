class IndexController < ApplicationController
  respond_to :html

  before_action :set_week, only: [:index]
  before_action :set_current_day, only: [:index]
  before_action :set_calendar, only: [:index]

  # GET /
  def index
    respond_with @week.to_json, @current_day
  end

  private

  def set_calendar
    @calendar = Calendar.first
  end

  def set_week
    @week = {monday: 'David Yurek',
             tuesday: 'Sarah Vessels',
             wednesday: 'Chase Southard',
             thursday: 'Dave Hempy',
             friday: 'Tristan Basil'}
  end

  def set_current_day
    @current_day = Time.now.wday
  end
end