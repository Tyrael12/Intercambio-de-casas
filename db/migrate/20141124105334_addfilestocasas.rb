class Addfilestocasas < ActiveRecord::Migration
  def change
  	add_column :casas, :situacion, :string
  	add_column :casas, :fechas, :string
  	add_column :casas, :descripcion, :text
  end
end
