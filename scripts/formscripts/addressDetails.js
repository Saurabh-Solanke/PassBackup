document.getElementById("nextButton4").addEventListener("click", () => {
  document.getElementById("emergencyContact-tab").click();
  document
    .getElementById("emergencyContact")
    .scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("staticData/states_districts.json")
    .then((response) => response.json())
    .then((data) => {
      const stateSelect = document.getElementById("present_state");
      data.states.forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateSelect.appendChild(option);
      });

      stateSelect.addEventListener("change", () => {
        const districtSelect = document.getElementById("present_district");
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
});
