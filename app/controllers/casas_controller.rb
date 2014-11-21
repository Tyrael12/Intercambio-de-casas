class CasasController < ApplicationController
before_action :authenticate_user!
	def index
    	@casas = current_user.casas
	end
	def new
    	@casa = Casa.new
 	end
 	def create
    @casa = Casa.new(casa_params)
    @casa.user = current_user
      if @casa.save
        redirect_to casas_path, notice: 'Casa was successfully created.' 
      else
        render :new 
      end
      end
    private
    def casa_params
      params.require(:casa).permit(:ciudad, :direccion)
    end
end
