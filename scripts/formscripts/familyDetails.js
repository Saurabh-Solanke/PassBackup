document.getElementById("nextButton3").addEventListener("click", () => {
  document.getElementById("addressDetails-tab").click();
  document
    .getElementById("addressDetails")
    .scrollIntoView({ behavior: "smooth" });
});
