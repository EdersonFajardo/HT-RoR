class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :nombre
      t.string :apellido
      t.string :telefono

      t.timestamps
    end
  end
end
