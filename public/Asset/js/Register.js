document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    formData.forEach(function(value, key) {
      console.log(key + ': ' + value);
    });
  });