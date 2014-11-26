class Addfiletocasas < ActiveRecord::Migration
  def change
  	add_column :casas, :address, :string
  	add_column :casas, :latitude, :float
  	add_column :casas, :longitude, :float
  end
end
