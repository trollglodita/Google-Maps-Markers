var mapStyle = [
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "invert_lightness": true },
      { "color": "#6fca4e" },
      { "lightness": 7 },
      { "saturation": 2 },
      { "gamma": 1.2 }
    ]
  }
]

var styledMap = new google.maps.StyledMapType(mapStyle, {name: "Parks Map"});

var map;

function loadMap() {
	var mapOptions = {
	  center: new google.maps.LatLng(-33.3676, -70.5029),
	  zoom:15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map-canvas"),
	    mapOptions);

	map.mapTypes.set('styledMap', styledMap);
	map.setMapTypeId('styledMap');

	loadMapMarkers();
}

function loadMapMarkers () {
	var markerVetInitialPosition = new google.maps.LatLng(-33.3630, -70.4933);

	var markerIconOliver = {
		url: 'img/oliver.png',
		size: new google.maps.Size(225, 150),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(189, 116)
	};

	var markerShapeOliver = {
		coord: [0,0,10,10],
		type: 'rect'
	};

	markerVet = new google.maps.Marker({
		position: markerVetInitialPosition,
		map: map,
		title: 'First Vet',
		icon: markerIconOliver,
		shape: markerShapeOliver,
		zIndex: 102
	});


	// Second marker
	var markerPerroInitialPosition = new google.maps.LatLng(-33.3703, -70.5066);

	var markerIconPerro = {
		url: 'img/perro.png',
		size: new google.maps.Size(225, 150),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(189, 116)
	};

	var markerShapePerro = {
		coord: [0,0,10,10],
		type: 'rect'
	};

	markerPerro = new google.maps.Marker({
		position: markerPerroInitialPosition,
		map: map,
		title: 'Second Dog',
		icon: markerIconPerro,
		shape: markerShapePerro,
		zIndex: 102
	});
}