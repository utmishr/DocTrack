const editLink = document.getElementById('editLink');
const departmentField = document.getElementById('department');
const honourField = document.getElementById('honour');
const phoneField = document.getElementById('phone');
const addressField = document.getElementById('address');
const emailField = document.getElementById('email');

const modal = document.getElementById('editModal');
const closeButton = document.querySelector('.modal-close');
const saveButton = document.getElementById('saveButton');
const cancelButton = document.getElementById('cancelButton');

const section = document.getElementById('Section');
const designation = document.getElementById('Designation');
const password = document.getElementById('Password');
const Name = document.getElementById('Name');
const email = document.getElementById('Email')
const usr_name = document.getElementById('usr_name')
const usr_dept = document.getElementById('usr_dept')
const usr_sec = document.getElementById('usr_sec')
const usr_depr = document.getElementById('usr_depr')
const usr_email = document.getElementById('usr_email')
console.log(usr_name, usr_dept, usr_sec, usr_depr, usr_email);
console.log(usr_email);
// Open the modal form when the edit link is clicked
editLink.addEventListener('click', function(event) {
  event.preventDefault();
  openModal();
});

// Close the modal form when the close button is clicked
closeButton.addEventListener('click', closeModal);

// Close the modal form when the cancel button is clicked
cancelButton.addEventListener('click', closeModal);

// Save the edited details when the save button is clicked
saveButton.addEventListener('click', saveDetails);

const data = JSON.parse(localStorage.getItem('responseData'));
console.log(data);
console.log(data.email);
console.log(usr_email);
usr_email.innerHTML = data.email;
usr_name.innerHTML = data.name;

usr_sec.innerHTML = data.section;
usr_depr.innerHTML = data.designation;


usr_email.innerHTML = data.email;
function openModal() {
  // Clear the input field values
   Name.value = data.name;
  password.value = '';
  section.value= data.section;
  designation.value = data.designation;
  email.value = data.email
  // Show the modal
  modal.style.display = 'block';
}

function closeModal() {
  // Hide the modal
  modal.style.display = 'none';
}

function saveDetails() {
  // Get the updated values from the input fields
 
  
  // Create an object with the updated data
  const updatedData = {
    name: Name.value,
    email:email.value,
    section: section.value,
    designation: designation.value,
    password: password.value
  };
  const token = JSON.parse(localStorage.getItem('responseData')).token;
 
  // Make an HTTP request to send the updated data to the backend

  fetch('http://localhost:8000/api/user/updateCredentials', {
    method: 'POST',
    mode:"cors",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
    .then(response => {
   
      if (response.ok) {
        closeModal();
        return response.json();
        
      
      } else {
        // Error occurred while updating data
        console.error('Failed to update data. Please try again.');
      }
    })
    .then(data=> {
      console.log('Response Body:', data); // Log the response body as text

      if(data != undefined){
        localStorage.removeItem('responseData');
        data.data.token = token;
        console.log(data.data);
      
        localStorage.setItem('responseData', JSON.stringify(data.data));
        updataCredential(data);

      }
    
      
    })
    .catch(error => {
      console.error('Error occurred while updating data:', error);
    });
}

const isLogin = ()=>{
  if(!localStorage.getItem('responseData')){
       window.location.assign('../Login/index.html');
  }
}

isLogin();
function updataCredential(data) {
  
  const user_name =  data.data.name;
  const user_depart = data.data.designation;
  const user_sect = data.data.section;
  console.log(user_depart);
  
    document.getElementById('usr_depr').innerHTML= user_depart; // Update the user department on the webpage
 
  document.getElementById('usr_name').innerHTML = user_name; // Update the user name on the webpage
  // document.getElementById('usr_depr') = user_depart; // Update the user department on the webpage
  document.getElementById('usr_sec').innerHTML= user_sect; // Update the user section on the webpage

}



