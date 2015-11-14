class AddRecurringToExemptions < ActiveRecord::Migration
  def change
    add_column :exemptions, :recurring, :boolean, default: false, null: false
  end
end
