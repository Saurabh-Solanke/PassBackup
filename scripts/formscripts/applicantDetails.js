document.getElementById("nextButton2").addEventListener("click", () => {
  document.getElementById("familyDetails-tab").click();
  document
    .getElementById("familyDetails")
    .scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("staticData/states_districts.json")
    .then((response) => response.json())
    .then((data) => {
      const stateSelect = document.getElementById("state");
      data.states.forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateSelect.appendChild(option);
      });

      stateSelect.addEventListener("change", () => {
        const districtSelect = document.getElementById("district");
        districtSelect.innerHTML = ""; // Clear previous options
        const selectedState = stateSelect.value;
        data.districts[selectedState].forEach((district) => {
          const option = document.createElement("option");
          option.value = district;
          option.text = district;
          districtSelect.appendChild(option);
        });
      });
    });

  document.getElementById("known_yes").addEventListener("change", () => {
    document.getElementById("aliases").style.display = "block";
  });

  document.getElementById("known_no").addEventListener("change", () => {
    document.getElementById("aliases").style.display = "none";
  });

  document.getElementById("changed_yes").addEventListener("change", () => {
    document.getElementById("previous_name").style.display = "block";
  });

  document.getElementById("changed_no").addEventListener("change", () => {
    document.getElementById("previous_name").style.display = "none";
  });
});
