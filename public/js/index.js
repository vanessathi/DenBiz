import { ConnectionRefusedError } from "sequelize/types";

const search = $('#search');
$('#searchform').on('click', handleFormSubmit);

/**
* Represent the event that occurs after a form is clicked
* @param {string} event - What occurs after form is submitted
*/
function handleFormSubmit(event) {
  event.preventDefault();
  if (!search.val().trim().trim()) {
    return;
  }
  find(search.val().trim());
  /**
  * A get function that passes name as dynamic variable
  * @param {string} address - What occurs after form is submitted
  */
  function find(address) {
    $.get('/api/smallbusiness/' + address, (data) => {
      console.log(data.address, data.city);
      geolocation(data.address, data.city);
    });
  };
}

/**
 * A geolocation converter from address to lat long
 * @param {string} location
 * @param {string} city
*/
function geolocation(location, city) {
  const queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + ',+' + city + ',+CO&key= AIzaSyA4KKZm2o6ZYDa0oTYJUqrjw8akzbS62Yk';
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function(response) {
    const lat = (response.results[0].geometry.location.lat);
    const long = (response.results[0].geometry.location.long);
    initMap(lat, long);
  });
}

/**
 * A callback function to create map
 * @param {number} lat
 * @param {number} long
 */
function initMap(lat, long) {
  const coords = {lat, long};
  // Denver Coords: 39.7392° N, 104.9903° W - Use for center if we use a marker
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 39.7392, long: 104.9903},
  });
  const marker = new google.maps.Marker({
    position: coords,
    map: map,
  });
  const infoWindow = new google.maps.InfoWindow({
    content: 'name',
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
