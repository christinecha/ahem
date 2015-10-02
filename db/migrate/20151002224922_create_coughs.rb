class CreateCoughs < ActiveRecord::Migration
  def change
    create_table :coughs do |t|
      t.string :type
      t.integer :frequency
      t.integer :age

      t.timestamps null: false
    end
  end
end
