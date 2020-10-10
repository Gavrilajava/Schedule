class WorkcentersController < ApplicationController

 
  before_action :get_workcenter, only: [:destroy, :update]

  def index
    render json: {items: Workcenter.serialized}
  end


  def update
    if @workcenter.update(strong_params)
      render json: {
        notice: "Workcenter #{@workcenter.code} updated",
        items: Workcenter.serialized
      }
    else
      render json: {error: @workcenter.format_errors}
    end
  end

  def create
    workcenter = Workcenter.new(strong_params)
    if workcenter.save
      render json: {
        notice: "Workcenter #{workcenter.code} created",
        items: Workcenter.serialized
      }
    else
      render json: {error: workcenter.format_errors}
    end
  end

  def destroy
    if  @workcenter.destroy
      render json: {
        notice: "Workcenter deleted",
        items: Workcenter.serialized
      }
    else
      render json: {error: @workcenter.format_errors}
    end
  end

  private

  def get_workcenter
    @workcenter = Workcenter.find(params[:id])
  end

  def strong_params
    params.require(:item).permit(:code, :name, :group, :description, :average_downtime, :frozen_period, :minimal_setup, :setup_reduction_type, :average_setup, :average_speed, :max_deviation)
  end

end
