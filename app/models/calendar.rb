class Calendar < ActiveRecord::Base
  belongs_to :user

  validates :current_day_id, presence: true
  validates :date, presence: true

  def make_current
    old_date = date
    new_date = Date.today
    self.update(date: new_date)
    (old_date..new_date).each do |d|
      unless d.wday == 0 || d.wday == 6
        self.current_day_id = (current_day_id + 1) % 6
      end
    end
  end
end
