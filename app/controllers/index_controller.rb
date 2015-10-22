class IndexController < ApplicationController
  respond_to :html

  before_action :set_week, only: [:index]

  # GET /
  def index
    respond_with @week.to_json
  end

  private

  def set_week
    @week = {monday: 'monday',
             tuesday: 'tuesday',
             wednesday: 'wednesday',
             thursday: 'thursday',
             friday: 'friday'}
  end
end