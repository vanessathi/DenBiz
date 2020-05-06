$(document).ready(function() {
  const nameInput = $('#businessName');
  const address = $('#inputAddress');
  const contact = $('#inputContact');
  const email = $('#inputEmail');
  const website = $('#websiteUrl');
  const type = $('#inputType');
  const city =$('#inputCity');
  $('.register').on('submit', handleFormSubmit);
  /**
   * Represent the event that occurs after a form is clicked
   * @param {string} event - What occurs after form is submitted
   */
  function handleFormSubmit(event) {
    event.preventDefault();
    if (!nameInput.val().trim().trim() || !address.val().trim().trim()) {
      return;
    }
    insertData({
      name: nameInput.val().trim(),
      address: address.val().trim(),
      contactNumber: contact.val().trim(),
      email: email.val().trim(),
      website: website.val().trim(),
      category: type.val(),
      city: city.val().trim(),
    });
    /**
     * Function for inserting data in to the smallbusiness table
     * @param {obj} businessData
     */
    function insertData(businessData) {
      $.post('/api/smallbusiness', businessData)
          .then(console.log('it worked'));
    }
  }
});
