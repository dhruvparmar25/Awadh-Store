function saveData() {
  let email = document.getElementById("email").value.trim();
  let fullName = document.getElementById("fullName").value.trim();
  let password = document.getElementById("password").value.trim();

  if (email === "" || fullName === "" || password === "") {
    alert("All fields are required!");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address!");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(user => user.email === email)) {
    alert("Email already exists! Please login.");
    return;
  }

  users.push({ email, fullName, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! You can now login.");
}

function login() {
  let loginEmail = document.getElementById("emails").value.trim();
  let loginPassword = document.getElementById("passwords").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user exists
  let validUser = users.find(user => user.email === loginEmail && user.password === loginPassword);

  if (!validUser) {
    alert("Invalid email or password! Please sign up first.");
    return;
  }

  alert("Login successful! Redirecting to Home Page...");
  localStorage.setItem("loggedInUser", JSON.stringify(validUser));
  window.location.href="index.html" // Redirect to home page
}
