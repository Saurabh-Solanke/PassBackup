function displayFirstname() {
  const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

  if (activeUser) {
    const firstname = activeUser.firstname;

    document.getElementById("username").textContent = firstname;
  } else {
    console.error("No activeUser found in session storage");
  }
}

window.addEventListener("load", displayFirstname);
