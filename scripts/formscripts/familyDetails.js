document.getElementById("nextButton3").addEventListener("click", () => {
  document.getElementById("addressDetails-tab").click();
  document
    .getElementById("addressDetails")
    .scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("minorFields").style.display = "none";
  document.getElementById("adultFields").style.display = "none";
  document.getElementById("guardianFields").style.display = "none";

  document.querySelectorAll('input[name="minor_or_adult"]').forEach((elem) => {
    elem.addEventListener("change", () => {
      if (document.getElementById("minor").checked) {
        document.getElementById("minorFields").style.display = "block";
        document.getElementById("adultFields").style.display = "none";
      } else {
        document.getElementById("minorFields").style.display = "none";
        document.getElementById("adultFields").style.display = "block";
      }
    });
  });

  document
    .getElementById("add_guardian_details")
    .addEventListener("change", (event) => {
      if (event.target.checked) {
        document.getElementById("guardianFields").style.display = "block";
      } else {
        document.getElementById("guardianFields").style.display = "none";
      }
    });

  document.getElementById("add_spouse").addEventListener("change", (event) => {
    if (event.target.checked) {
      document.getElementById("spouseFields").style.display = "block";
    } else {
      document.getElementById("spouseFields").style.display = "none";
    }
  });
});
