// Register function
function register() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!username || !password || !confirmPassword) {
    alert('Please fill all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (localStorage.getItem('user_' + username)) {
    alert("Username already exists!");
    return;
  }

  localStorage.setItem('user_' + username, password);
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}

// Login function
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please fill all fields');
    return;
  }

  const storedPassword = localStorage.getItem('user_' + username);

  if (storedPassword && storedPassword === password) {
    localStorage.setItem('loggedInUser', username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password!");
  }
}

// Dashboard check login
function checkLogin() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    window.location.href = "login.html";
  } else {
    document.getElementById('welcomeMsg').innerText = `Welcome, ${loggedInUser}!`;
  }
}

// Logout
function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "login.html";
}
