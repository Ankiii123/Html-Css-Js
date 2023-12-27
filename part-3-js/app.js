function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById('country').value;
  
    if (!username || !password || !gender || !country) {
      alert('Please fill out all fields.');
      return false; // Prevent form submission
    }
  
    // If all fields are filled, you can proceed with form submission
    return true;
  }
  