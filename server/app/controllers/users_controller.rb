class UsersController < ApplicationController

  before_action :check_priveleges
  before_action :action_user, only: [:destroy, :update]


  def index
    render json:  {
      items: User.serialized,
      options: User.options
    }
  end


  def update
  
    if !params[:item][:password] && !params[:item][:password_confirmation]
      params[:item] = params[:item].except(:password, :password_confirmation)
    elsif params[:item][:password] != params[:item][:password_confirmation]
      render json: {error: "Password should match confirmation"}
    end
    if @action_user.update(user_params)
      render json: {
        notice: "User #{@action_user.name} updated",
        items: User.serialized,
        options: User.options
      }
    else
      render json: {error: @action_user.format_errors}
    end
  end

  def destroy
    if  @action_user.destroy
      flash[:success] = "User deleted successfully!"
    else
      flash.alert = @action_user.errors.messages
    end
    redirect_to users_path
  end

  def create
    @action_user = User.new(user_params)   
    if @action_user.save
      flash[:success] = "Account created successfully!"
    else
      flash.alert = @action_user.errors.messages
    end
    redirect_to users_path
  end

private

  def user_params
    params.require(:item).permit(:id, :name, :role, :email, :password, :password_confirmation)
  end

  def action_user
    @action_user = User.find(params[:id])
  end

  def check_priveleges
    render json: {error: 'Only Admin can access this page.'} if !@user.admin
  end
end
