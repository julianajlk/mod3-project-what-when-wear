class DatePeriodsController < ApplicationController
  def index
    render json: DatePeriod.all
  end

  def show
    render json: DatePeriod.find(params[:id])
  end
end
