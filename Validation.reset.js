function checkPassword() {
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const message = document.getElementById('message');
    const submitBtn = document.querySelector('button[type="submit"]');
   

    if (newPassword.value !== confirmPassword.value) {
      message.textContent = 'Passwords do not match';
      submitBtn.disabled = true;
    } else {
      message.textContent = '';
      submitBtn.disabled = false;
    }
  }

  function validateForm() {
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('error-msg');

    if (newPassword.value !== confirmPassword.value) {
      errorMessage.textContent = 'Passwords do not match';
      return false;
    }
    errorMessage.textContent = ''; 
    return true;
 

  }
