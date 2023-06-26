function addTimelineEntry(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered name and date values from the input fields
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value;

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // const date = dateInput.value;

  if (name.trim() !== '' && date.trim() !== '') {
    // Create a new timeline entry
    const timeline = document.getElementById('timeline');

    const newEntry = document.createElement('li');
    newEntry.className = 'li complete';

    const timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.innerHTML = `<span class="date">${date}</span>`;

    const status = document.createElement('div');
    status.className = 'status';
    status.innerHTML = `<h4>${name}</h4>`;

    newEntry.appendChild(timestamp);
    newEntry.appendChild(status);

    timeline.appendChild(newEntry);

    // Clear the input fields
    nameInput.value = '';
    dateInput.value = '';
  }
}
const token = JSON.parse(localStorage.getItem('responseData')).token;
const url = window.location.href;
const doc_id = url.split('?')[1].split('=')[1];
console.log(doc_id);

const get_document = (token,doc_id)=>{
     fetch(`http://localhost:8000/api/document/accessDoc${doc_id}`,{
      mode: 'cors',
      method: 'GET',
      headers: {
          'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
     }}).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Login failed');
      }
    }).then(info => {
        console.log(info,'info');
    });

}

get_document(token,doc_id);
const isLogin = ()=>{
  if(!localStorage.getItem('responseData')){
       window.location.assign('../Login/index.html');
  }
}

isLogin();