
  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); 
    showSuccessMessage();
    document.getElementById('contact').reset();
  });
  
