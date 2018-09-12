class CreateWeathers < ActiveRecord::Migration[5.2]
  def change
    create_table :weathers do |t|
      t.integer :temperature_avg
      t.integer :precipitation

      t.timestamps
    end
  end
end
