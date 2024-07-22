document.getElementById("nextButton2").addEventListener("click", () => {
  document.getElementById("familyDetails-tab").click();
  document.getElementById("familyDetails").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("staticData/states_districts.json")
    .then((response) => response.json())
    .then((data) => {
      const stateSelect = document.getElementById("state");
      const districtSelect = document.getElementById("district");

      data.states.forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateSelect.appendChild(option);
      });

      stateSelect.addEventListener("change", () => {
        districtSelect.innerHTML = "<option value='' disabled selected>Select City</option>"; // Clear previous options and set placeholder
        const selectedState = stateSelect.value;
        data.districts[selectedState].forEach((district) => {
          const option = document.createElement("option");
          option.value = district;
          option.text = district;
          districtSelect.appendChild(option);
        });
      });

      // Initialize district select with disabled option
      districtSelect.innerHTML = "<option value='' disabled selected>Select State First</option>";
    });

  const aliasesField = document.getElementById("aliases");
  const previousNameField = document.getElementById("previous_name");

  document.getElementById("known_yes").addEventListener("change", () => {
    aliasesField.style.display = "block";
    aliasesField.tabIndex = 0;
  });

  document.getElementById("known_no").addEventListener("change", () => {
    aliasesField.style.display = "none";
    aliasesField.tabIndex = -1;
  });

  document.getElementById("changed_yes").addEventListener("change", () => {
    previousNameField.style.display = "block";
    previousNameField.tabIndex = 0;
  });

  document.getElementById("changed_no").addEventListener("change", () => {
    previousNameField.style.display = "none";
    previousNameField.tabIndex = -1;
  });

  // Set initial display state and tabIndex for hidden fields
  aliasesField.style.display = "none";
  aliasesField.tabIndex = -1;
  previousNameField.style.display = "none";
  previousNameField.tabIndex = -1;
});
