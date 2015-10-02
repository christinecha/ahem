Rails.application.routes.draw do
  resources :coughs

  root 'coughs#index'

end
