Rails.application.routes.draw do
  devise_for :users
  root 'index#index'
  resources :people
end
