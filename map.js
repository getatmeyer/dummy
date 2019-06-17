
var map;
var infowindow;
// var request;
// var service;
// var markers = [];

function initialize() {
  var center = new google.maps.LatLng(47.608013, -122.335167);
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 11,
    streetViewControl: false,
    mapTypeControl: false,

  });
// VOLUNTEER PARK
  var volunteer = new google.maps.Marker({
    position: {lat: 47.630028, lng: -122.3172377},
    map: map,
    icon: 'leash.png',
  });

  // MARINA BEACH PARK
 var marina = new google.maps.Marker({
   position: {lat: 47.805205, lng: -122.395506},
   map: map,
   icon: 'leash.png',

 });

 // DISCOVERY PARK
 var discovery = new google.maps.Marker({
  position: {lat: 47.657302, lng: -122.405496},
  map: map,
  icon: 'leash.png',
});
//GOLDEN GARDEN PARK
 var golden = new google.maps.Marker({
  position: {lat: 47.6917517, lng: -122.4052799},
  map: map,
  icon: 'off-leash.png'
});
//Denny PARK
 var denny = new google.maps.Marker({
  position: {lat: 47.6196688, lng: -122.3432826},
  map: map,
  icon: 'off-leash.png'

});
//Kinnear Park
var kinnear = new google.maps.Marker({
  position: {lat: 47.6269004, lng: -122.3697379},
  map: map,
  icon: 'off-leash.png',

});

//JUDKINS Park
var judkins = new google.maps.Marker({
  position: {lat: 47.594277, lng: -122.3060087},
  map: map,
  icon: 'leash.png',

});

//SEWARD Park
var seward = new google.maps.Marker({
  position: {lat: 47.5493908, lng: -122.2584997},
  map: map,
  icon: 'leash.png'
});

//AIKI Park
var aiki = new google.maps.Marker({
  position: {lat: 47.5790755, lng: -122.4136163},
  map: map,
  icon: 'leash.png'
});

//Magnolia Park
var magnolia = new google.maps.Marker({
  position: {lat: 47.6339092, lng: -122.3997462},
  map: map,
  icon: 'off-leash.png',

});
//Mangnuson Park
var mangunson = new google.maps.Marker({
  position: {lat: 47.6802077, lng: -122.2587839},
  map: map,
  icon: 'off-leash.png',

});
//UNIVERSITY WASHINGTON LOCATION
var university = new google.maps.Marker({
  position: {lat: 47.6084705, lng: -122.3355466},
  map: map,
  icon: 'UW.png',

});

// Marina infoWindow
 var infoWindow = new google.maps.InfoWindow({
  content: '<p>Marina Beach Park</p><p>498 Admiral Way, Edmond, WA 98020</p><p><Off Leash Area</p>'
});

//Discovery infoWindow
var infoWindow1 = new google.maps.InfoWindow({
  content: '<p>Discovery Park</p><p>498 Admiral Way, Edmond, WA 98020</p><p>Leash Area</p>'
});

//Volunteer infoWIndow
var infoWindow2 = new google.maps.InfoWindow({
  content: '<p>Volunteer Park</p><p>1247 15th Ave E, Seattle WA 98112</p><p>Off Leash Area</p>'
});

//Golden Garden infoWIndow
var infoWindow3 = new google.maps.InfoWindow({
  content: '<p>Golden Garden Park</p><p>8498 Seaview PI NW, Seattle WA 98117</p><p>Off Leash Area</p>'
});

//Denny Park infoWIndow
var infoWindow4 = new google.maps.InfoWindow({
  content: '<p>Denny Park</p><p>100 Dexter Ave N, Seattle WA 98119</p><p>Off Leash Area</p>'
});

// /Kinnear Park infoWIndow
var infoWindow5 = new google.maps.InfoWindow({
  content: '<p>Kinnear Park</p><p>899 W Olympic PI Ave N, Seattle WA 98109</p><p>Off Leash Area</p>'
});

//Judkins Park infoWIndow
var infoWindow6 = new google.maps.InfoWindow({
  content: '<p>Judkins Park</p><p>2150 S Norman St, Seattle WA 98144</p><p>Leash Area</p>'
});

//Seward Park infoWIndow
var infoWindow7 = new google.maps.InfoWindow({
  content: '<p>Seward Park</p><p>5900 Lake Washington Blvd S, Seattle WA 98118</p><p>Leash Area</p>'
});

// /Aiki Park infoWIndow
var infoWindow8 = new google.maps.InfoWindow({
  content: '<p>Aiki Beach Park</p><p>1702 Aiki Ave SW, Seattle 98116</p><p>Leash Area</p>'
});

// /Magnolia Park infoWIndow
var infoWindow9 = new google.maps.InfoWindow({
  content: '<p>Magnolia Park</p><p>1461 Magnolia Blvd W, Seattle WA 981199</p><p>Off-Leash Area</p>'
});

// Mangnuson Park infoWIndow
var infoWindow10 = new google.maps.InfoWindow({
  content: '<p>Mangnuson Park</p><p>7400 Sand Point Way NE, Seattle WA 98115</p><p> Off-Leash Area</p>'
});

// University Washington infoWindow
var infoWIndow11 = new google.maps.InfoWindow({
  content: '<p>Puget Sound Plaza</p><p>1325 4th Ave, Seattle WA 98101</p>'
});

//Marina click
 marina.addListener('click', function() {
   infowindow.close();
   infoWindow.open(map, marina);

 });
//Discovery click
 discovery.addListener('click', function() {
  infowindow.close();
  infoWindow1.open(map, discovery);

 });
//Volunteer click
 volunteer.addListener('click', function() {
  infowindow.close();
  infoWindow2.open(map, volunteer);

 });
 //Golden Gardens click
 golden.addListener('click', function() {
  infowindow.close();
  infoWindow3.open(map, golden);

 });
//Denny Park click
denny.addListener('click', function() {
  infowindow.close();
  infoWindow4.open(map, denny);

 });
//Kinnear Park click
kinnear.addListener('click', function() {
  infowindow.close();
  infoWindow5.open(map, kinnear);

 });
 //Judkins Park click
judkins.addListener('click', function() {
  infowindow.close();
  infoWindow6.open(map, judkins);

 });
 //Seward Park click
seward.addListener('click', function() {
  infowindow.close();
  infoWindow7.open(map, seward);

 });
 //Aiki Park click
aiki.addListener('click', function() {
  infowindow.close();
  infoWindow8.open(map, aiki);

 });

 //Magonlia Park click
 magnolia.addListener('click', function() {
  infowindow.close();
  infoWindow9.open(map, magnolia);

 });

 //Mangnuson Park click
 mangunson.addListener('click', function() {
  infowindow.close();
  infoWindow10.open(map, mangunson);

 });
 //University Washington click
 university.addListener('click', function() {
   infowindow.close();
   infoWIndow11.open(map, university);

 });

  // var request = {
  //   location: center,
  //   // fields: ['name', 'formatted_address'],
  //   radius: 140000,
  //   // types: ['park']
  // };
  infowindow = new google.maps.InfoWindow();

  // var service = new google.maps.places.PlacesService(map);

  // service.nearbySearch(request);

}
google.maps.event.addDomListener(window, 'load', initialize);

// function callback(results, status) {
//   if (status = google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(place) {
  // var placeLoc = place.geometry.location;
  // var marker = new google.maps.Marker({
    // map: map,
    // position: place.geometry.location
    

  // });


  // google.maps.event.addListener(marker, 'click', function() {
    // infowindow.setContent(place.name + place.formatted_address);
    // infowindow.setContent(place.formatted_address);


    // infowindow.open(map, this);
// });

// }

// google.maps.event.addDomListener(window, 'load', initialize);



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
