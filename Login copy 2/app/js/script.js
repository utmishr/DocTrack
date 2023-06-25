
// const emailInput = document.getElementById('mail_input');
// const passwordInput = document.getElementById('password_input');
// const loginButton = document.querySelector('.frame30__login-essntials__btn button');

// loginButton.addEventListener('click', function() {
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   const loginData = {
//     email: email,
//     password: password
//   };

//   sendLoginData(loginData);
// });

// function sendLoginData(loginData) {
//   const params = new URLSearchParams(loginData);
//   const queryString = params.toString();

//   fetch(`http://localhost:8000/api/user/login?${queryString}`, {
//     mode: 'cors',
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log(response.json());
      
//       // window.location.href = 'next-page.html';
//     } else {
//       console.log('Login failed');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

const emailInput = document.getElementById('mail_input');
const passwordInput = document.getElementById('password_input');
const loginButton = document.querySelector('.frame30__login-essntials__btn button');
function checkLogin(){
  const data = localStorage.getItem('responseData');
 console.log(data);
  if(data){
    window.location.assign('../../../../Front/sources/dashboard.html');
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
