class ChangeExemptionDayToString < ActiveRecord::Migration
  def change
    change_column :exemptions, :day, :string
  end
end
