class CreateDatePeriods < ActiveRecord::Migration[5.2]
  def change
    create_table :date_periods do |t|
      t.date :date
      t.integer :weather_id
      t.timestamps
    end
  end
end
