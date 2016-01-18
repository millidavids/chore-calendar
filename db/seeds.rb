puts 'Seeding users'
user = User.create!(username: ENV['DEFAULT_USER'],
                    password: ENV['DEFAULT_PASSWORD'],
                    password_confirmation: ENV['DEFAULT_PASSWORD'])
puts "\tSeeded user #{user.username} with password #{ENV['DEFAULT_PASSWORD']}"

puts 'Seeding people'
user.people.create!(name: 'David Y')
user.people.create!(name: 'Dave H')
user.people.create!(name: 'Todd')
user.people.create!(name: 'Lindsay')
user.people.create!(name: 'Summer')
user.people.create!(name: 'Mklbtz')
user.people.create!(name: 'Steeev')
user.people.create!(name: 'Andrew')

puts 'Seeding calendar'
calendar = Calendar.create!(date: Date.today, current_day_id: 1, user: user,
                            person_order: [*1..user.people.count])
