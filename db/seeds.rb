puts 'Seeding users'
user = User.create!(username: ENV['DEFAULT_USER'],
                    password: ENV['DEFAULT_PASSWORD'],
                    password_confirmation: ENV['DEFAULT_PASSWORD'])
puts "\tSeeded user #{user.username} with password #{ENV['DEFAULT_PASSWORD']}"

puts 'Seeding people'
user.people.create!(name: 'David Yurek')
user.people.create!(name: 'Dave Hempy')
user.people.create!(name: 'Chase Southard')
user.people.create!(name: 'Chase James')
user.people.create!(name: 'Todd Wiley')
user.people.create!(name: 'Sarah Vessels')
user.people.create!(name: 'Nick Warner')
user.people.create!(name: 'Lindsay Rall')
user.people.create!(name: 'Summer Smith')
user.people.create!(name: 'Michael Bates')
user.people.create!(name: 'Michael Huelsman')
user.people.create!(name: 'Graham Hough')
user.people.create!(name: 'Tristan Basil')
user.people.create!(name: 'Erik Mudrak')

puts 'Seeding calendar'
user.calendars.create!(date: Date.today, current_day_id: 1,
                       person_order: [*1..user.people.count])
