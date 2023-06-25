const emailInput = document.getElementById('mail_input');
const passwordInput = document.getElementById('password_input');
const loginButton = document.querySelector('.frame30__login-essntials__btn button');
function checkLogin(){
  const data = localStorage.getItem('responseData');
 
  if(data){
    window.location.assign('../../../../sources/dashboard.html');
  }
  
}
checkLogin();
loginButton.addEventListener('click', function() {
  const email = emailInput.value;
  const password = passwordInput.value;

  const loginData = {
    email: email,
    password: password
  };

  sendLoginData(loginData);
});

function sendLoginData(loginData) {
  fetch('http://localhost:8000/api/user/login', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(response => {
    console.log(response);
    if (response.ok) {
      
      return response.json();
    } else {
      throw new Error('Login failed');
    }
  })
  .then(data => {
    console.log(data);
    localStorage.setItem('responseData', JSON.stringify(data));
    checkLogin();
    // window.location.href = 'next-page.html';
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
