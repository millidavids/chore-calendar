Rails.application.routes.draw do
  devise_for :users
  post '/calendar/people/switch' => 'calendars#switch_people'
  root 'calendars#index'
  get 'ical', to: 'calendars#ical', format: :ics
end
