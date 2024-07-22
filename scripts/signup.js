// document.getElementById("signupForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Extract form data
//   const username = document.getElementById("username").value || null;
//   const firstname = document.getElementById("firstname").value || null;
//   const lastname = document.getElementById("lastname").value || null;
//   const email = document.getElementById("email").value || null;
//   const password = document.getElementById("password").value || null;
//   const confirmPassword = document.getElementById("confirm_password").value || null;
//   const phoneNo = document.getElementById("phoneNo").value || null;
//   const securityQuestion = document.getElementById("security_question").value || null;
//   const securityAnswer = document.getElementById("security_answer").value || null;

//   // Check if password and confirm password match
//   if (password !== confirmPassword) {
//     alert("Passwords do not match!");
//     return;
//   }

//   // Get UserAccounts from local storage or initialize it
//   let UserAccounts = JSON.parse(localStorage.getItem("UserAccounts")) || [
//     {
//       id: 1,
//       username: "admin",
//       email: "admin@passportal.com",
//       password: "Admin@123",
//       accountStatus: 1, // Active
//       firstname: "Admin",
//       lastname: null,
//       phoneNo: null,
//       securityQuestion: null,
//       securityAnswer: null,
//     },
//   ];

//   // Check if username or email already exists
//   const userExists = UserAccounts.some(user => user.username === username || user.email === email);
//   if (userExists) {
//     alert("Username or Email already exists!");
//     return;
//   }

//   // Increment ID based on the last user's ID
//   const newUserId = UserAccounts[UserAccounts.length - 1].id + 1;

//   // Create a new user object
//   const newUser = {
//     id: newUserId,
//     username: username,
//     email: email,
//     password: password,
//     accountStatus: 1, // Active
//     firstname: firstname,
//     lastname: lastname,
//     phoneNo: phoneNo,
//     securityQuestion: securityQuestion,
//     securityAnswer: securityAnswer,
//   };

//   // Add the new user to the UserAccounts array
//   UserAccounts.push(newUser);

//   // Store the updated UserAccounts array in local storage
//   localStorage.setItem("UserAccounts", JSON.stringify(UserAccounts));
//   sessionStorage.setItem("activeUser", JSON.stringify(newUser));

//   // Redirect to the home page
//   window.location.href = "home.html";
// });
// /////////////////

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Extract form data and set to null if not provided
  const username = document.getElementById("username").value || null;
  const firstname = document.getElementById("firstname").value || null;
  const lastname = document.getElementById("lastname").value || null;
  const email = document.getElementById("email").value || null;
  const password = document.getElementById("password").value || null;
  const confirmPassword = document.getElementById("confirm_password").value || null;
  // const phoneNo = document.getElementById("phoneNo").value || null;
  const securityQuestion = document.getElementById("security_question").value || null;
  const securityAnswer = document.getElementById("security_answer").value || null;

  // Check if password and confirm password match
  if (password === null || confirmPassword === null || password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

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
      securityQuestion: null,
      securityAnswer: null,
    },
  ];

  // Check if username or email already exists
  const userExists = UserAccounts.some(user => user.username === username || user.email === email);
  if (userExists) {
    alert("Username or Email already exists!");
    return;
  }

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
    // phoneNo: phoneNo,
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
