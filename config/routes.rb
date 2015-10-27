Rails.application.routes.draw do
  resources :calendars
  root 'index#index'
  resources :people
end
