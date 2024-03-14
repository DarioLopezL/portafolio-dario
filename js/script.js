function showSuccessMessage() {
    document.getElementById('success-message').style.display = 'block';
    setTimeout(function() {
      document.getElementById('success-message').style.display = 'none';
    }, 8000);
  }
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    showSuccessMessage();
    document.getElementById('contact').reset();
  });
  
