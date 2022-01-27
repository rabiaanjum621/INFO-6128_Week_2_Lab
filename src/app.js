document.querySelector('#share').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'This is subject',
      text: 'This is the body',
      url: 'https://dev.localhost/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  let para = document.querySelector("p");
// searchParams.get() will properly handle decoding the values.
  if(parsedUrl.searchParams.get('title') != null){
    para.innerHTML = 'Information has been shared as following \n' +
    ' Title shared: ' + parsedUrl.searchParams.get('title') + '\n'+
    ' Text shared: ' + parsedUrl.searchParams.get('text') + '\n'+
    ' URL shared: ' + window.location.href

  console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
  }
  else
  alert('values received');
});