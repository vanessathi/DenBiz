$(document).ready(function() {
  $('#searchform').on('submit', handleFormSubmit);
  /**
   * Represent the event that occurs after a form is clicked
   * @param {string} event - What occurs after form is submitted
   */
  function handleFormSubmit(event) {
    event.preventDefault();
  }
});
