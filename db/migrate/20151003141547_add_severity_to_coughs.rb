class AddSeverityToCoughs < ActiveRecord::Migration
  def change
    add_column :coughs, :severity, :integer
  end
end
