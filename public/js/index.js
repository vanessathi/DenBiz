$(document).ready(function() {
  const search = $('#search');
  $('#searchform').on('click', handleFormSubmit);

  /**
  * Represent the event that occurs after a form is clicked
  * @param {string} event - What occurs after form is submitted
  */
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(search.val());
    if (!search.val().trim().trim()) {
      return;
    }
    find(search.val().trim());
    /**
     * A get function that passes name as dynamic variable
     * @param {string} name - What occurs after form is submitted
     */
    function find(name) {
      $.get('/api/smallbusiness/' + name, function(data) {
        console.log(data);
      });
    };
  }
});
