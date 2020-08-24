const form = document.querySelector('form');
const URI = 'http://localhost:5002/ser';
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const value = formData.get('value');
    const data = {
        name,
        value
    };
   fetch(URI, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
           'content-type': 'application/json'
       }

   });
});
