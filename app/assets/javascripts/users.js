function showlocation(){


var madrid = new google.maps.LatLng(latitude,longitude);
var opciones = {
    zoom : 5,
    center: madrid,
 
};
var div = document.getElementById("mapa");
var map = new google.maps.Map(div, opciones);

putMarker(latitude,longitude);

function putMarker(lat, lon){
	return new google.maps.Marker({
  position: new google.maps.LatLng(lat,lon),
  map: map
});
}
};	