class IndexController < ApplicationController
  respond_to :html

  before_action :set_week, only: [:index]
  before_action :set_current_day, only: [:index]

  # GET /
  def index
    respond_with @week.to_json, @current_day
  end

  private

  def set_week
    @week = {monday: 'monday',
             tuesday: 'tuesday',
             wednesday: 'wednesday',
             thursday: 'thursday',
             friday: 'friday'}
  end

  def set_current_day
    @current_day = Time.now.wday
  end
end