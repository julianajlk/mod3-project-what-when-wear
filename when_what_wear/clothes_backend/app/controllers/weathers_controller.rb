class WeathersController < ApplicationController
  def index
    render json: Weather.all
  end

  def show
    render json: Weather.find(params[:id])
  end
end
