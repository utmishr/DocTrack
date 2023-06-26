function searchDocuments() {
    // Get the search input value
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
  
    // Get all the document cards
    var documentCards = document.getElementsByClassName("document-card");
  
    // Loop through each document card
    for (var i = 0; i < documentCards.length; i++) {
      var documentCard = documentCards[i];
      var documentName = documentCard.getElementsByClassName("document-name")[0].innerText.toLowerCase();
  
      // Hide or show the document card based on the search input
      if (documentName.includes(searchInput)) {
        documentCard.style.display = "block";
      } else {
        documentCard.style.display = "none";
      }
    }
  }
  const documentCard = (title, author_name, description,id)=>{
     
    return (
      `
      <div target="_blank" class="document-card" doc_id = ${id}  id = 'doc_card'>
      <h2 class="document-name">${title}</h2>
      <p class="document-author">Author: ${author_name}</p>
      <p class="document-description">
        ${description}
      </p>
    </div>
      `
    )
  }

const get_all_tagged_documents = async(token)=>{
  fetch('http://localhost:8000/api/document/tagged_doc',{
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
     const {data} = info;
   
    for(let i = 0; i < data.length; i++){
    
         const {title,description} = data[i].document_id;
       
         const author_name = data[i].document_id.createdBy.name;
         
         const doc_id = data[i].document_id.createdBy._id;
    const card = documentCard(title,author_name,description,doc_id);
  //  here card is just string and hence we can't access its id property
  // it is not a dom element
  
    let cardContainer = document.getElementById('tagged-documents');
    console.log(cardContainer);
    cardContainer.innerHTML += card;
    }
      })
    }
   

const get_all_created_documents = async(token)=>{
  fetch('http://localhost:8000/api/document/show_created_doc',{
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
      const {data} = info;
     
      for(let i = 0; i < data.length; i++){
    
        const {title,description} = data[i];
        const author_name = data[i].createdBy.name;
      
        const doc_id = data[i]._id;
    const card = documentCard(title,author_name,description,doc_id);
    const cardContainer = document.getElementById('created-documents');
    
    cardContainer.innerHTML += card;  
       
      }
    })
  }



const token = JSON.parse(localStorage.getItem('responseData')).token;



get_all_tagged_documents(token);
get_all_created_documents(token);
function addproperties(){
  var docs = document.querySelectorAll('#doc_card');
  console.log(docs);
  docs.forEach((doc)=>{
    doc.addEventListener('click',()=>{
      const doc_id = doc.getAttribute('doc_id');
      console.log(doc_id);
    
      window.location.assign(`../sources/document.html?doc_id=${doc_id}`);
    })
  })
}

setTimeout(addproperties,500)





  // Handle click event on the window to clear the dropdown


  const isLogin = ()=>{
    if(!localStorage.getItem('responseData')){
         window.location.assign('../Login/index.html');
    }
  }
  
  isLogin();
  