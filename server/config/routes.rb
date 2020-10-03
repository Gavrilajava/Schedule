Rails.application.routes.draw do
  
  post "/login", to: "auth#create"

  get '/workcenter', to: "workcenters#index"
  post '/workcenter', to: "workcenters#create"
  patch '/workcenter/:id', to: "workcenters#update"
  delete '/workcenter/:id', to: "workcenters#destroy"

  get '/user', to: "users#index"
  post '/user', to: "users#create"
  patch '/user/:id', to: "users#update"
  delete '/user/:id', to: "users#destroy"

end
