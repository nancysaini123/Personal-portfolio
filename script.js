function validateForm() {
    // Get the form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");
  
    // Clear any previous error message
    errorMessage.textContent = '';
  
    // Validate Name (can't be empty)
    if (name === "") {
      errorMessage.textContent = "Name is required.";
      return false;
    }
  
    // Validate Email (must be a valid email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return false;
    }
  
    // Validate Message (can't be empty)
    if (message === "") {
      errorMessage.textContent = "Message is required.";
      return false;
    }
  
    // If all validations pass, return true (form is submitted)
    return true;
  }
  document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-menu');
    navLinks.classList.toggle('active');
});
