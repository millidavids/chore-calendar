class User < ActiveRecord::Base
  # :confirmable, :lockable, :timeoutable, :omniauthable,
  # :recoverable, :rememberable, :validatable
  devise :database_authenticatable, :trackable, :registerable,
         authentication_keys: [:username]

  validates :username, presence: true, uniqueness: {case_sensitive: false}
  validates :password, presence: true, confirmation: true,
                       if: :password_required?
  validates :password, length: {in: 6..72}

  has_many :calendars
  has_many :people

  private

  def password_required?
    !persisted? || !password.nil? || !password_confirmation.nil?
  end
end
