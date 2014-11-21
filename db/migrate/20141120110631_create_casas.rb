class CreateCasas < ActiveRecord::Migration
  def change
    create_table :casas do |t|
      t.string :name
  	  t.string :ciudad
  	  t.string :provincia
  	  t.string :pais
  	  t.string :direccion
  	  t.string :localizacion


      t.timestamps
    end
  end
end
