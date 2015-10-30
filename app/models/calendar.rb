class Calendar < ActiveRecord::Base
  validates :current_day_id, presence: true
  validates :date, presence: true
end
