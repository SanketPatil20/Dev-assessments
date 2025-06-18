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
    // Save session data
    sessionStorage.setItem('loggedInUser', JSON.stringify({ email, name: user.name }));
    window.location.href = 'welcome.html';
  } else {
    message.textContent = 'Incorrect password.';
    message.style.color = 'red';
  }
});
