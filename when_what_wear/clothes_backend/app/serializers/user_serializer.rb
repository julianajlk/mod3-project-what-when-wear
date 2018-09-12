class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :city
  has_many :outfits
end
