const next = $('#next');
const previous = $('#previous');
const deleteBtn = $('.close');
let pageNumber = 0;

next.on('click', () =>{
  event.preventDefault();
  pageNumber ++;
  $.ajax({
    method: 'GET',
    url: '/api/business/' + pageNumber,
  }).then((data) => {
    console.log('success');
  });
});

previous.on('click', () => {
  event.preventDefault();
  if (pageNumber > 1) {
    pageNumber --;
  }
  $.ajax({
    method: 'GET',
    url: '/api/business/' + pageNumber,
  }).then((data) => {
    console.log(data);
    render('business', data);
  });
});

deleteBtn.on('click', (event) => {
  event.preventDefault();
  const id = parseInt(event.target.id);
  console.log(id);
  $.ajax({
    method: 'DELETE',
    url: '/api/smallbusiness/' + id,
  }).then($.ajax({
    method: 'GET',
    url: '/api/business/' + pageNumber,
  }).then(console.log('worked'))
  );
});

