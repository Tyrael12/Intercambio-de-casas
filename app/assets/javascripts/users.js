// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
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