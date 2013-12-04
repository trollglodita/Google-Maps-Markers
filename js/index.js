var map;

function loadMap() {
var mapOptions = {
  center: new google.maps.LatLng(-33.3676, -70.5029),
  zoom:15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

loadMapMarkers();
}

function loadMapMarkers () {
	var markerVetInitialPosition = new google.maps.LatLng(-33.3630, -70.4933);

	markerVet = new google.maps.Marker({
		position: markerVetInitialPosition,
		map: map,
		title: 'First Vet',
	});
}