# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_10_200042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "date_periods", force: :cascade do |t|
    t.date "date"
    t.integer "weather_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "outfits", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "category"
    t.string "image_url"
    t.integer "min_temperature"
    t.integer "max_temperature"
    t.boolean "is_rainy"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weathers", force: :cascade do |t|
    t.integer "temperature_avg"
    t.integer "precipitation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
