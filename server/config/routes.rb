Rails.application.routes.draw do
  
  post "/login", to: "auth#create"

  get '/workcenter', to: "workcenters#index"
  post '/workcenter', to: "workcenters#create"
  patch '/workcenter/:id', to: "workcenters#update"
  delete '/workcenter/:id', to: "workcenters#destroy"

end
