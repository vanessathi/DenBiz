const next = $('#next');
const previous = $('#previous');
const deleteBtn = $('#delete');
let pageNumber = 0;

next.on('click', () =>{
  pageNumber ++;
  $.get('/api/business', pageNumber)
      .then(console.log('I worked' + pageNumber));
});

previous.on('click', () => {
  if (pageNumber > 0) {
    pageNumber --;
  }
  $.get('/api/business', pageNumber)
      .then(console.log('I worked' + pageNumber));
});

deleteBtn.on('click', () => {
  const id = $(this).data;
  $.delete('/api/smallbusiness/' + id)
      .then(location.reload());
});
