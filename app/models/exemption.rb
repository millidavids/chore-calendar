class Exemption < ActiveRecord::Base
  belongs_to :person
  belongs_to :calendar

  validates :day, presence: true, numericality: {only_integer: true,
                                                 inclusion: 0..6}
  validate :person_tied_to_calendar

  scope :not_recurring, ->{ where(recurring: false) }

  private

  def person_tied_to_calendar
    return unless person && calendar
    unless calendar.people.include? person
      errors.add(:person, "must be tied to user #{calendar.user.username} " +
                          'like the calendar.')
    end
  end
end
