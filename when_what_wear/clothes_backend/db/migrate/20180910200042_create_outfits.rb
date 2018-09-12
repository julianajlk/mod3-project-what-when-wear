class CreateOutfits < ActiveRecord::Migration[5.2]
  def change
    create_table :outfits do |t|
      t.string :name
      t.string :description
      t.string :category
      t.string :image_url
      t.integer :min_temperature
      t.integer :max_temperature
      t.boolean :is_rainy
      t.integer :user_id

      t.timestamps
    end
  end
end
