const scriptURL = 'https://script.google.com/a/macros/greenlabelrecycling.com/s/AKfycbwOo19nKaL66Qmbj8gzCqh9BPWXammoUcf6kQhn_so/dev'

const form = document.forms['contact-form']
console.log(window.location);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
