const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const storedUser = localStorage.getItem(email);

  if (!storedUser) {
    message.textContent = 'User not found.';
    message.style.color = 'red';
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password === btoa(password)) {
    message.textContent = `Login successful! Welcome, ${user.name}.`;
    message.style.color = 'green';
  } else {
    message.textContent = 'Incorrect password.';
    message.style.color = 'red';
  }
});
