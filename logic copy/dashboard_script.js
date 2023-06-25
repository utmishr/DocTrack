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
  
  
  // Handle click event on the window to clear the dropdown
  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("searchDropdown");
    if (!event.target.matches("#searchInput")) {
      dropdown.innerHTML = ""; // Clear the dropdown
    }
  });
  