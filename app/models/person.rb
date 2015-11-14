class Person < ActiveRecord::Base
  belongs_to :user
  has_many :exemptions

  validates :user, presence: true
  validates :name, presence: true, uniqueness: {scope: [:user_id]}
end
