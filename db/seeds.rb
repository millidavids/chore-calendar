puts 'Seeding users'
user = User.create!(username: ENV['DEFAULT_USER'],
                    password: ENV['DEFAULT_PASSWORD'],
                    password_confirmation: ENV['DEFAULT_PASSWORD'])
puts "\tSeeded user #{user.username} with password #{ENV['DEFAULT_PASSWORD']}"

puts 'Seeding people'
user.people.create!(name: 'David Y')
user.people.create!(name: 'Dave H')
user.people.create!(name: 'Chase S')
user.people.create!(name: 'Chase J')
user.people.create!(name: 'Todd')
sarah = user.people.create!(name: 'Sarah')
user.people.create!(name: 'Nick')
user.people.create!(name: 'Lindsay')
user.people.create!(name: 'Summer')
user.people.create!(name: 'Mklbtz')
user.people.create!(name: 'Michael H')
user.people.create!(name: 'Gorm')
user.people.create!(name: 'Tito')
user.people.create!(name: 'Erik')

puts 'Seeding calendar'
calendar = Calendar.create!(date: Date.today, current_day_id: 1, user: user,
                            person_order: [*1..user.people.count])

puts 'Seeding exemptions'
Exemption.create!(day: 3, person: sarah, calendar: calendar, recurring: true)
