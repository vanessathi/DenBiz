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
  });
}
