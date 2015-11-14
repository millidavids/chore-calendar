class AddCalendarIdToExemptions < ActiveRecord::Migration
  def change
    add_column :exemptions, :calendar_id, :integer
    add_index :exemptions, :calendar_id
  end
end
