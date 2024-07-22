  document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get active user from session storage
      const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

      if (!activeUser) {
        alert("No active user found. Please log in first.");
        return;
      }

      // Extract form data
      const type = document.querySelector('input[name="type"]:checked').value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
      const currentDate = new Date();

      // Create unique ID in the format date+time+userid
      const uniqueId = parseInt(
        currentDate.getFullYear().toString() +
          (currentDate.getMonth() + 1).toString().padStart(2, "0") +
          currentDate.getDate().toString().padStart(2, "0") +
          currentDate.getHours().toString().padStart(2, "0") +
          currentDate.getMinutes().toString().padStart(2, "0") +
          currentDate.getSeconds().toString().padStart(2, "0") +
          activeUser.id
      );

      // Create a feedback/complaint object
      const submission = {
        id: uniqueId,
        userId: activeUser.id,
        email: activeUser.email,
        subject: subject,
        message: message,
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString(),
      };

      // Get the relevant array from local storage or initialize it
      let submissionsArray = JSON.parse(localStorage.getItem(type + "s")) || [];

      // Add the new submission to the array
      submissionsArray.push(submission);

      // Store the updated array back in local storage
      localStorage.setItem(type + "s", JSON.stringify(submissionsArray));

      // Show a success message or redirect
      alert(
        type.charAt(0).toUpperCase() + type.slice(1) + " submitted successfully!"
      );

      // Optionally clear the form
      document.querySelector("form").reset();
    });
  });
