class AddPersonIdToExemptions < ActiveRecord::Migration
  def change
    add_column :exemptions, :person_id, :integer
    add_index :exemptions, :person_id
  end
end
