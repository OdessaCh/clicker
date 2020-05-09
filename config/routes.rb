Rails.application.routes.draw do
  get 'users/index'
  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
 
# Rails.application.routes.draw do
#   get 'users/index'
#   get 'admin' => 'pages#admin'
# end