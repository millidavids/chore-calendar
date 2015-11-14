class Calendar < ActiveRecord::Base
  belongs_to :user
  has_many :people, through: :user

  validates :current_day_id, presence: true
  validates :date, presence: true
  validates :user_id, presence: true, uniqueness: true
  validate :person_order_is_people_ids

  def make_current
    old_date = date
    new_date = Date.today
    (old_date..new_date).each do |d|
      unless d.wday == 0 || d.wday == 6
        self.current_day_id = (current_day_id + 1) % 6
      end
    end
    self.date = new_date
    return true unless changed?
    save
  end

  def get_person_hash
    Hash[person_order.map {|i|
      [people.find(i).name, i]
    }]
  end

  # Returns a hash of weekdays and the people assigned to them.
  #
  # Fetches People tied to the User of this Calendar, based on their location
  # in the person_order array.
  #
  def get_week_hash current_day
    monday_idx = current_day_id + 1 - current_day
    {monday: people.find(person_order[monday_idx]).name,
     tuesday: people.find(person_order[monday_idx + 1]).name,
     wednesday: people.find(person_order[monday_idx + 2]).name,
     thursday: people.find(person_order[monday_idx + 3]).name,
     friday: people.find(person_order[monday_idx + 4]).name}
  end

  private

  def person_order_is_people_ids
    return unless person_order && user
    unless person_order.all? {|id| people.exists?(id) }
      valid_ids = people.pluck(:id).map(&:to_s).join(', ')
      errors.add(:person_order, 'must be an array of people IDs taken from ' +
                                "the following: #{valid_ids}.")
    end
  end
end
