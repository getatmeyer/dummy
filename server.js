

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.608013, lng: -122.335167},
    zoom: 12,
    // center: myLatlng,
    streetViewControl: false,
    mapTypeControl: false
    
  });

var input = document.getElementById('pac-input');

var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        autocomplete.setFields(['geometry','name']);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);

        var marker = new google.maps.Marker({map: map});

        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
  
          autocomplete.addListener('place_changed', function() {
            infowindow.close();
  
            var place = autocomplete.getPlace();
  
            if (!place.geometry) {
              return;
            }
  
            if (place.geometry.viewport) {
              map.fitBounds(place.geometry.viewport);
            } else {
              map.setCenter(place.geometry.location);
              map.setZoom(14);
            }

            // Set the position of the marker using the place ID and location.
          marker.setPlace({
            placeId: place.place_id,
            location: place.geometry.location
          });

          marker.setVisible(true);

          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-id'].textContent = place.place_id;
          infowindowContent.children['place-address'].textContent =
              place.formatted_address;
          infowindow.open(map, marker);
        });
    }
    


// var styleControl = document.getElementById('style-selector-control');
// var styles = {
//     default: null,
//     scheme: [
//   {
//     "featureType": "poi.attraction",
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "elementType": "labels.text",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.government",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.medical",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "color": "#3e50ff"
//       },
//       {
//         "weight": 2
//       }
//     ]
//   },
//   {
//     "featureType": "poi.place_of_worship",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.school",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.sports_complex",
//     "stylers": [
//       {
//         "color": "#fdff12"
//       },
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station.airport",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
// }
//     ]}
