const form = document.getElementById('registrationForm');
const messages = document.getElementById('messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  messages.innerHTML = '';
  let errors = [];

  if (!name || !email || !phone) {
    errors.push('All fields are required.');
  }

  const namePattern = /^[A-Za-z\s]+$/;
  if (name && !namePattern.test(name)) {
    errors.push('Name should contain only letters and spaces.');
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailPattern.test(email)) {
    errors.push('Invalid email format.');
  }

  const phonePattern = /^\d+$/;
  if (phone && !phonePattern.test(phone)) {
    errors.push('Phone number should contain only digits.');
  }

  if (errors.length > 0) {
    messages.innerHTML = errors.map(err => `<div class="error">${err}</div>`).join('');
  } else {
    messages.innerHTML = '<div class="success">Registration successful!</div>';
    form.reset();
  }
});
