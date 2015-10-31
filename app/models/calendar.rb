class Calendar < ActiveRecord::Base
  validates :date, presence: true
end
