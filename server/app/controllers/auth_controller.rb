class AuthController < ApplicationController

  skip_before_action :logged_in?, only: [:create]


  def create
      user = User.find_by(name: params[:name])
      if user && user.authenticate(params[:password])
          render json: {user: user.name, token: encode_token({user_id: user.id})}
      else
        if !user
          render json: {error: "User not found"}
        else
          render json: {error: "Wrong password"}
        end
      end
  end

end
