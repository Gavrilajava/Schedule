class WorkcentersController < ApplicationController

 
  before_action :get_workcenter, only: [:destroy, :update]

  def index
    render json: Workcenter.sorted
  end


  def update
    if @workcenter.update(strong_params)
      render json: Workcenter.sorted
    else
      render json: {error: @workcenter.errors.messages}
    end
  end

  def create
    workcenter = Workcenter.new(strong_params)
    if workcenter.save
      flash[:success] = "Workcenter created successfully!"
    else
      flash.alert = workcenter.errors.messages
    end
    redirect_to workcenters_path
  end

  def destroy
    if  @workcenter.destroy
      flash[:success] = "Workcenter deleted successfully!"
    else
      flash.alert = @workcenter.errors.messages
    end
    redirect_to workcenters_path
  end

  private

  def get_workcenter
    @workcenter = Workcenter.find(params[:id])
  end

  def strong_params
    params.require(:workcenter).permit(:code, :name, :group, :description, :average_downtime, :frozen_period, :minimal_setup, :setup_reduction_type, :average_setup, :average_speed, :max_deviation)
  end

end
