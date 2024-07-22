// Function to handle form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract form data
    const loginIdentifier = document.getElementById("loginIdentifier").value;
    const password = document.getElementById("password").value;

    // Get UserAccounts from local storage
    let UserAccounts = JSON.parse(localStorage.getItem("UserAccounts")) || [];

    // Check if user exists
    const user = UserAccounts.find(
      (user) =>
        (user.username === loginIdentifier ||
          user.email === loginIdentifier ||
          user.phoneNo === loginIdentifier) &&
        user.password === password
    );

    if (user) {
      // Store the active user in session storage
      sessionStorage.setItem("activeUser", JSON.stringify(user));
      // Redirect based on user ID
      if (user.id === 1) {
        window.location.href = "admin_home.html";
      } else {
        window.location.href = "home.html";
      }
    } else {
      // Show error message on failed login
      alert("Invalid login credentials. Please try again.");
    }
  });
