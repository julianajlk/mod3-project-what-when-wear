class WeatherSerializer < ActiveModel::Serializer
  attributes :id, :temperature_avg, :precipitation
  has_many :date_periods
end
