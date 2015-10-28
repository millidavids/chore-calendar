class AddPersonOrderArrayToCalendar < ActiveRecord::Migration
  def change
    add_column :calendars, :person_order, :integer, array: true, default: []
  end
end
