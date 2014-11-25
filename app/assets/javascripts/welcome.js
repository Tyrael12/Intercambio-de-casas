setInterval('avanzaSlide()',5000);
var arrayImagenes = new Array(".img1",".img2",".img3",".img4",".img5");
var contador = 0;


function mostrar(img){
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeIn(1500);        
    });
}


function ocultar(img){
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeOut(1500);        
    });
}


function avanzaSlide(){
    ocultar(arrayImagenes[contador]);
    contador = (contador + 1) % 5;
    mostrar(arrayImagenes[contador]);
}
function showlocation(){


var madrid = new google.maps.LatLng(40.4430018,-3.5847271);
var opciones = {
    zoom : 5,
    center: madrid,
 
};
var div = document.getElementById('mapa');
var map = new google.maps.Map(div, opciones);


putMarker(41.3956445,2.2064281);
putMarker(38.925229,1.4831543);
putMarker(40.4430018,-3.5847271);

function putMarker(lat, lon){
	return new google.maps.Marker({
  position: new google.maps.LatLng(lat,lon),
  map: map
});
}
};	