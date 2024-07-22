function displayFirstname() {
  const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

  if (activeUser) {
    const firstname = activeUser.firstname;

    document.getElementById("username").textContent = firstname;
  } else {
    console.error("No activeUser found in session storage");
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

  if (activeUser) {
    document.getElementById("profileName").textContent = `${activeUser.firstname} ${activeUser.lastname}`;
    document.getElementById("profileEmail").textContent = activeUser.email;
    document.getElementById("profilePhone").textContent = activeUser.phoneNo || "N/A"; // Default to "N/A" if phoneNo is null
  }
});

window.addEventListener("load", displayFirstname);

document.addEventListener("DOMContentLoaded", function() {
  const applyButtons = document.querySelectorAll(".pricing-column .btn");

  applyButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const applicationType = this.getAttribute("data-application-type");
      const bookletType = this.getAttribute("data-booklet-type");

      localStorage.setItem("applicationType", applicationType);
      localStorage.setItem("passportBookletType", bookletType);

      // Redirect to the new passport application page
      window.location.href = this.getAttribute("href");
    });
  });
});
