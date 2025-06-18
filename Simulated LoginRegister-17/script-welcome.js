const userData = sessionStorage.getItem('loggedInUser');
const welcomeMessage = document.getElementById('welcomeMessage');
const logoutBtn = document.getElementById('logoutBtn');

// Redirect if not logged in
if (!userData) {
  window.location.href = 'login.html';
} else {
  const user = JSON.parse(userData);
  welcomeMessage.textContent = `Welcome, ${user.name}!`;
}

logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
});
