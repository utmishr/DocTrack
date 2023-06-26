const isLogin = ()=>{
  if(!localStorage.getItem('responseData')){
       window.location.assign('../Login/index.html');
  }
}

isLogin();
const handleLogout = () => {
  console.log('running');

  localStorage.removeItem('responseData');
  isLogin();
}

const logout = document.getElementById('logout');
console.log(logout);
logout.addEventListener('click', handleLogout);


const generateButton = document.getElementById('generate-button');
const generateModal = document.getElementById('generate-modal');
const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const closeButton = document.getElementsByClassName('generate-close');
const resultModal = document.getElementById('result-modal');
const resultModalData = document.getElementById('generate-modal-data');

generateButton.addEventListener('click', () => {
  generateModal.style.display = 'block';
});

passwordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  generateModal.style.display = 'none';
  const token = JSON.parse(localStorage.getItem('responseData')).token;
  const password = passwordInput.value;

  const requestBody = {
    password: password
  };

  fetch('http://localhost:8000/api/user/generateKeys', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      resultModalData.textContent = formatJSONData(data);
      resultModal.style.display = 'block';
    })
    .catch(error => {
      console.error(error);
    });
});

[...closeButton].forEach(button => {
  button.addEventListener('click', () => {
    generateModal.style.display = 'none';
    resultModal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target === generateModal) {
    generateModal.style.display = 'none';
  }
  if (event.target === resultModal) {
    resultModal.style.display = 'none';
  }
});

function formatJSONData(data) {
  return JSON.stringify(data, null, 2).replace(/[{}]/g, '');
}
