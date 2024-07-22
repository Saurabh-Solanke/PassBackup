document.addEventListener("DOMContentLoaded", function() {
    const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
  
    if (activeUser) {
      document.getElementById("firstname").value = activeUser.firstname || "";
      document.getElementById("lastname").value = activeUser.lastname || "";
      document.getElementById("email").value = activeUser.email || "";
      document.getElementById("phone").value = activeUser.phoneNo || "";
    }
  
    document.getElementById("editProfileForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const firstname = document.getElementById("firstname").value || null;
      const lastname = document.getElementById("lastname").value || null;
      const email = document.getElementById("email").value || null;
      const phoneNo = document.getElementById("phone").value || null;
  
      if (activeUser) {
        // Update session storage
        activeUser.firstname = firstname;
        activeUser.lastname = lastname;
        activeUser.email = email;
        activeUser.phoneNo = phoneNo;
  
        sessionStorage.setItem("activeUser", JSON.stringify(activeUser));
  
        // Update local storage
        let UserAccounts = JSON.parse(localStorage.getItem("UserAccounts")) || [];
        const userIndex = UserAccounts.findIndex(user => user.id === activeUser.id);
  
        if (userIndex !== -1) {
          UserAccounts[userIndex].firstname = firstname;
          UserAccounts[userIndex].lastname = lastname;
          UserAccounts[userIndex].email = email;
          UserAccounts[userIndex].phoneNo = phoneNo;
  
          localStorage.setItem("UserAccounts", JSON.stringify(UserAccounts));
        }
  
        alert("Profile updated successfully!");
      } else {
        alert("User not found!");
      }
    });
  });
  