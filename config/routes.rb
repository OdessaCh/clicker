Rails.application.routes.draw do
  root "pages#home"
  resources :users, only: [:index, :create, :show, :update, :destroy]
end
