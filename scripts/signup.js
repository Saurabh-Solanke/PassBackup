// Function to handle form submission
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract form data
    const username = document.getElementById("username").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNo = document.getElementById("phoneNo").value;
    const securityQuestion = document.getElementById("security_question").value;
    const securityAnswer = document.getElementById("security_answer").value;

    // Get UserAccounts from local storage or initialize it
    let UserAccounts = JSON.parse(localStorage.getItem("UserAccounts")) || [
      {
        id: 1,
        username: "admin",
        email: "admin@passportal.com",
        password: "Admin@123",
        accountStatus: 1, // Active
        firstname: "Admin",
        lastname: null,
        phoneNo: null,
      },
    ];

    // Increment ID based on the last user's ID
    const newUserId = UserAccounts[UserAccounts.length - 1].id + 1;

    // Create a new user object
    const newUser = {
      id: newUserId,
      username: username,
      email: email,
      password: password,
      accountStatus: 1, // Active
      firstname: firstname,
      lastname: lastname,
      phoneNo: phoneNo,
      securityQuestion: securityQuestion,
      securityAnswer: securityAnswer,
    };

    // Add the new user to the UserAccounts array
    UserAccounts.push(newUser);

    // Store the updated UserAccounts array in local storage
    localStorage.setItem("UserAccounts", JSON.stringify(UserAccounts));
    sessionStorage.setItem("activeUser", JSON.stringify(newUser));
    // Redirect to the home page
    window.location.href = "home.html";
  });
