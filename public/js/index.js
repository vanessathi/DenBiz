$(document).ready(function() {
  const search = $('#searchform');
  $('#searchform').on('submit', find(search));
  /**
   * Represent the event that occurs after a form is clicked
   * @param {string} category - What occurs after form is submitted
   */
  function find(category) {
    event.preventDefault();
    $.get('/api/smallbusiness/' + category);
  };
});
