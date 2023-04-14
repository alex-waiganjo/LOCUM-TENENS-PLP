const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  
  const firstname = form.firstname.value;
  const lastname = form.lastname.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form['confirm-password'].value;
  
  // perform form validation
  if (firstname === '' || lastname ==='' || email === '' || Idno === '' || password === '' || confirmPassword === '') {
    alert('Please fill out all fields.');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
  } else {
    alert('Sign up successful!');
    // redirect to the next page
    window.location.href = 'dashboard.html';
  }
});
