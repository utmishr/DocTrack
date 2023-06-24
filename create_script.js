function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
  
    const jsonData = JSON.stringify(value);
    console.log(value);
    console.log("value");
    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    });
  }
  
  const form = document.querySelector('#myForm');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
  

