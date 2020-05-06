$(document).ready(function() {
  const name = S('');
  const address = $('');
  const contact = $('');
  const email = $('');
  const website = $('');
  const type = $('');
  $('#addform').on('submit', handleFormSubmit);
  /**
  * Represent the event that occurs after a form is clicked
  * @param {string} event - What occurs after form is submitted
  */
  function handleFormSubmit(event) {
    event.preventDefault();
    // If there is no name input stop the add function
    if (!name.val().trim()) {
      return;
    };
  }
});
