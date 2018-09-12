class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :image_url, :min_temperature, :max_temperature, :is_rainy
  belongs_to :user
end
