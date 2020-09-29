Rails.application.routes.draw do
  
  post "/login", to: "auth#create"

  get '/workcenters', to: "workcenters#index"
  post '/workcenters', to: "workcenters#index"
  patch '/workcenters/:id', to: "workcenters#update"
  delete '/workcenters/:id', to: "workcenters#destroy"

end
