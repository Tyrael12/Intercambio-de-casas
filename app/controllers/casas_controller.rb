class CasasController < ApplicationController
before_action :authenticate_user!
  def destroy
    @casa = Casa.find(params[:id])
    @casa.destroy
   
    redirect_to casas_path
  end
  def show
   @casa = Casa.find(params[:id]) 
  end
  def index
    @casas = current_user.casas
  end
  def busqueda
    @busq = Casa.search(params[:ciudad]) 
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
    params.require(:casa).permit(:ciudad, :direccion, :provincia, :pais, :situacion, :fechas, :descripcion, :address, :latitude, :longitude)
  end
 
end
