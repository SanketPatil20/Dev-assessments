const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    message.textContent = 'All fields are required.';
    message.style.color = 'red';
    return;
  }

  const user = {
    name,
    password: btoa(password)  // Encode password (not secure in real apps)
  };

  localStorage.setItem(email, JSON.stringify(user));
  message.textContent = 'Registration successful!';
  message.style.color = 'green';
  form.reset();
});
