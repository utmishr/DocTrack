document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var section = document.getElementById('section').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var description = document.getElementById('description').value;
  
    var data = {
      title: title,
      section: section,
      from: from,
      to: to,
      description: description
    };
    // Retrieve the response data from localStorage
  const responseData = JSON.parse(localStorage.getItem('responseData'));
  const token = responseData.token;
  
  // Merge the response data with the form data
    console.log(token);
    console.log(data);
    fetch('http://localhost:8000/api/document/create', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(function(response) {
        if (!response.ok) {
          throw new Error('Error: ' + response.status + ' ' + response.statusText);
        }
        return response.json();
      })
      .then(function(responseData) {
        console.log('Data sent successfully');
        // Handle the response data if needed
        console.log(responseData);
      })
      .catch(function(error) {
        console.error(error.message);
      });
  });
});
