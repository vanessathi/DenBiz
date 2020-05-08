const next = $('#next');
const previous = $('#previous');
const deleteBtn = $('.close');
let pageNumber = localStorage.getItem("pgNum") || 0;

next.on('click', () =>{
  event.preventDefault();
  pageNumber ++;
  renderPage(pageNumber);
});

previous.on('click', () => {
  event.preventDefault();
  if (pageNumber > 0) {
    pageNumber --;
  }
  renderPage(pageNumber);
});

deleteBtn.on('click', (event) => {
  event.preventDefault();
  const id = parseInt(event.target.id);
  console.log(id);
  $.ajax({
    method: 'DELETE',
    url: '/api/smallbusiness/' + id,
  }).then(renderPage(pageNumber));
});
/**
 * A function to trigger new page
 * @param {number} pageNum
 */
function renderPage(pageNum) {
  localStorage.setItem("pgNum", pageNumber);
  console.log(pageNumber);
  $.ajax({
    method: 'GET',
    url: '/business/' + pageNumber,
  }).then((data) => {
    console.log('worked');
  });
}
