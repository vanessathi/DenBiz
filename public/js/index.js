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
};

/**
 * A geolocation converter from address to lat long
 * @param {string} location
 * @param {string} city
*/
function geolocation(location, city) {
  const queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + ',+' + city + ',+CO&key=AIzaSyA4KKZm2o6ZYDa0oTYJUqrjw8akzbS62Yk';
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function(response) {
    const lat = (response.results[0].geometry.location.lat);
    const lng = (response.results[0].geometry.location.lng);
    console.log(lat);
    console.log(lng);
    initMap(lat, lng);
  });
}

/**
 * A callback function to create map
 * @param {number} lat
 * @param {number} lng
 */
function initMap(lat, lng) {
  const coords = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };
  console.log(coords);
  // Denver Coords: 39.7392° N, 104.9903° W - Use for center if we use a marker
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: coords,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}],
      },
    ],
  });
  const styleControl = document.getElementById('style-selector-control');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
  // Apply new JSON when the user chooses to hide/show features.
  document.getElementById('hide-poi').addEventListener('click', function() {
    map.setOptions({styles: styles['hide']});
  });
  document.getElementById('show-poi').addEventListener('click', function() {
    map.setOptions({styles: styles['default']});
  });
}

const styles = {
  default: null,
  hide: [
    {
      featureType: 'poi.business',
      stylers: [{visibility: 'off'}],
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}],
    },
  ],
};

