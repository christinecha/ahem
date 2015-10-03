Rails.application.routes.draw do
  resources :coughs

  root 'coughs#new'

end
