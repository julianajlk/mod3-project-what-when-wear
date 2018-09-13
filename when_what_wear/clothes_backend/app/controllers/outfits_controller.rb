class OutfitsController < ApplicationController
  def index
    render json: Outfit.all
  end

  def show
    render json: Outfit.find(params[:id])
  end

  def create
    render json: Outfit.create(outfit_params)
  end

  def update
    Outfit.find(params[:id]).update(outfit_params)
    render json: Outfit.find(params[:id]) 
  end

  def destroy
    render json: Outfit.find(params[:id]).destroy
  end

  private
  def outfit_params
    params.require(:outfit).permit(:name, :category, :description, :image_url, :min_temperature, :max_temperature, :is_rainy, :user_id)
  end
end
