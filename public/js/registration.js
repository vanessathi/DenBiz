$(document).ready(function() {
  const name = $('#businessName');
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
    if (!name.val().trim() || !address.val().trim()) {
      return;
    }
    insertData({
      name: name,
      address: address,
      contactNumber: contact,
      email: email,
      website: website,
      category: type,
      city: city,
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
