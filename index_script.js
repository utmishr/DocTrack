console.log("Starting");

function showDashboard() {
    fetch('dashboard.html')
      .then((response) => response.text())
      .then((html) => {
        document.querySelector('.content').innerHTML = html;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function showProfile() {
    fetch('profile.html')
      .then((response) => response.text())
      .then((html) => {
        document.querySelector('.content').innerHTML = html;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function showCreate() {
    fetch('create.html')
      .then((response) => response.text())
      .then((html) => {
        document.querySelector('.content').innerHTML = html;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function showSettinng() {
    fetch('setting.html')
      .then((response) => response.text())
      .then((html) => {
        document.querySelector('.content').innerHTML = html;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function showLogout() {
    fetch('logout.html')
      .then((response) => response.text())
      .then((html) => {
        document.querySelector('.content').innerHTML = html;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


