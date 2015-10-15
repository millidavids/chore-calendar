class IndexController < ApplicationController
  respond_to :html

  # GET /
  def index
    @calendar = Calendar.first || nil
  end
end