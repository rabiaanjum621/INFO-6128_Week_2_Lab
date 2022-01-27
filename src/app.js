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
  // searchParams.get() will properly handle decoding the values.
  if(parsedUrl.searchParams.get('title') != null){
  console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
  console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
  console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
  alert(parsedUrl.searchParams.get('title'));
  }
  else
  alert('null value received');
});