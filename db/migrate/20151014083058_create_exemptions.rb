class CreateExemptions < ActiveRecord::Migration
  def change
    create_table :exemptions do |t|
      t.integer :day

      t.timestamps null: false
    end
  end
end
