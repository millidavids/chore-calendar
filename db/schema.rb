# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20151114203124) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendars", force: :cascade do |t|
    t.date     "date"
    t.integer  "current_day_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "person_order",   default: [],              array: true
    t.integer  "user_id"
  end

  add_index "calendars", ["user_id"], name: "index_calendars_on_user_id", using: :btree

  create_table "exemptions", force: :cascade do |t|
    t.integer  "day"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "person_id"
    t.boolean  "recurring",   default: false, null: false
    t.integer  "calendar_id"
  end

  add_index "exemptions", ["calendar_id"], name: "index_exemptions_on_calendar_id", using: :btree
  add_index "exemptions", ["person_id"], name: "index_exemptions_on_person_id", using: :btree

  create_table "people", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

  add_index "people", ["user_id"], name: "index_people_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",           default: "", null: false
    t.string   "encrypted_password", default: "", null: false
    t.integer  "sign_in_count",      default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
