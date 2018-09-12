class DatePeriodsController < ApplicationController
  def index
    render json: DatePeriod.all
  end
end
