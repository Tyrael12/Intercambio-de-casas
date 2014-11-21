class AdduserIdtocasas < ActiveRecord::Migration
  def change
  	add_column :casas, :user_id, :integer
  end
end
