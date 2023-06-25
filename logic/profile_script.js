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
const departmentInput = document.getElementById('departmentInput');
const honourInput = document.getElementById('honourInput');
const phoneInput = document.getElementById('phoneInput');
const addressInput = document.getElementById('addressInput');
const emailInput = document.getElementById('emailInput');

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

function openModal() {
  // Clear the input field values
  departmentInput.value = '';
  honourInput.value = '';
  phoneInput.value = '';
  addressInput.value = '';
  emailInput.value = '';

  // Show the modal
  modal.style.display = 'block';
}

function closeModal() {
  // Hide the modal
  modal.style.display = 'none';
}

function saveDetails() {
  // Get the updated values from the input fields
  const updatedDepartment = departmentInput.value;
  const updatedHonour = honourInput.value;
  const updatedPhone = phoneInput.value;
  const updatedAddress = addressInput.value;
  const updatedEmail = emailInput.value;
  
  // Create an object with the updated data
  const updatedData = {
    department: updatedDepartment,
    honour: updatedHonour,
    phone: updatedPhone,
    address: updatedAddress,
    email: updatedEmail
  };
  const token = localStorage.getItem('responseData').token;
  // Make an HTTP request to send the updated data to the backend
  // fetch('/update-profile', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(updatedData)
  // })
  //   .then(response => {
  //     if (response.ok) {
  //       // Data successfully updated
  //       // You can add additional logic here, such as displaying a success message
  //       closeModal();
  //     } else {
  //       // Error occurred while updating data
  //       console.error('Failed to update data. Please try again.');
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error occurred while updating data:', error);
  //   });
}

const isLogin = ()=>{
  if(!localStorage.getItem('responseData')){
       window.location.assign('../Login/index.html');
  }
}

isLogin();