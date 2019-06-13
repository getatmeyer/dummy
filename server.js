
// var customLabel = {
//     offLeash: {
//       label: 'Off-leash'
//     },
//     leash: {
//       label: 'on-leash'
//     }
//   };

var map;
// var infowindow;
// var markers = [];

function initialize() {
  var center = new google.maps.LatLng(47.608013, -122.335167);
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12
  });

  var request = {
    location: center,
    radius: 8047,
    types: ['park']
  };
  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, callback);

}

function callback(results, status) {
  if (status = google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.gemoetry.location
    

  });
}


  // google.maps.event.addListener(marker, 'click', function() {
    // infowindow.setContent(place.name);
    // infowindow.open(map, this);
// });



google.maps.event.addDomListener(window, 'load', initialize);








// function initMap() {
// axios.get('https://maps.google.googleapis.com/maps/api/place'), {
//   params: {
//     key: 
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 47.608013, lng: -122.335167},
//     zoom: 12,
//     radius: 900,
//     streetViewControl: false,
//     mapTypeControl: false,
//     styles: [
//         {
//             "featureType": "poi.attraction",
//             "elementType": "labels.icon",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.business",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.business",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.business",
//             "elementType": "labels.icon",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.business",
//             "elementType": "labels.text",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.business",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.business",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.government",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.medical",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.park",
//             "elementType": "labels.icon",

//             "stylers": [
//               {
//                 "color": "#3e50ff"
//               },
//               {
//                 "weight": 2
//               }
//             ]
//           },
//           {
//             "featureType": "poi.place_of_worship",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.school",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.sports_complex",
//             "stylers": [
//               {
//                 "color": "#fdff12"
//               },
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.station.airport",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//         }
//             ]

//   });


// var input = document.getElementById('pac-input');

// var autocomplete = new google.maps.places.Autocomplete(input);
//         autocomplete.bindTo('bounds', map);

//         autocomplete.setFields(['geometry','name']);

//         map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//         var infowindow = new google.maps.InfoWindow();
//         var infowindowContent = document.getElementById('infowindow-content');
//         infowindow.setContent(infowindowContent);

//         var marker = new google.maps.Marker({map: map});

//         marker.addListener('click', function() {
//             infowindow.open(map, marker);
//           });

//           autocomplete.addListener('place_changed', function() {
//             infowindow.close();

//             var place = autocomplete.getPlace();

//             if (!place.geometry) {
//               return;
//             }

//             if (place.geometry.viewport) {
//               map.fitBounds(place.geometry.viewport);
//             } else {
//               map.setCenter(place.geometry.location);
//               map.setZoom(14);
//             }

//             // Set the position of the marker using the place ID and location.
//           marker.setPlace({
//             placeId: place.place_id,
//             location: place.geometry.location
//           });

//           marker.setVisible(true);

//           infowindowContent.children['place-name'].textContent = place.name;
//           infowindowContent.children['place-id'].textContent = place.place_id;
//           infowindowContent.children['place-address'].textContent =
//               place.formatted_address;
//           infowindow.open(map, marker);
//         });
//     }
