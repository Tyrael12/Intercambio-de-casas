class Casa < ActiveRecord::Base
	belongs_to :user
    	geocoded_by :address  
  		after_validation :geocode 
    def self.search(ciudad)
	    where('ciudad LIKE ?', "%#{ciudad}%")

	end
end
