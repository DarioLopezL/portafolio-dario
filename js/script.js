document.addEventListener('DOMContentLoaded', function() {
  function showSuccessMessage() {
    document.getElementById('success-message').style.display = 'block';
    setTimeout(function() {
      document.getElementById('success-message').style.display = 'none';
    }, 8000);
  }

  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    showSuccessMessage();
    document.getElementById('contact-form').reset();
  });
});

