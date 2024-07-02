document.getElementById("nextButton4").addEventListener("click", () => {
  document.getElementById("emergencyContact-tab").click();
  document.getElementById("emergencyContact").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("staticData/states_districts.json")
    .then((response) => response.json())
    .then((data) => {
      const stateSelect = document.getElementById("present_state");
      const permanentStateSelect = document.getElementById("permanent_state");
      data.states.forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateSelect.appendChild(option);

        const permOption = document.createElement("option");
        permOption.value = state;
        permOption.text = state;
        permanentStateSelect.appendChild(permOption);
      });

      stateSelect.addEventListener("change", () => {
        const districtSelect = document.getElementById("present_district");
        districtSelect.innerHTML = "<option value='' disabled selected>Select District</option>";
        const selectedState = stateSelect.value;
        data.districts[selectedState].forEach((district) => {
          const option = document.createElement("option");
          option.value = district;
          option.text = district;
          districtSelect.appendChild(option);
        });
      });

      permanentStateSelect.addEventListener("change", () => {
        const permanentDistrictSelect = document.getElementById("permanent_district");
        permanentDistrictSelect.innerHTML = "<option value='' disabled selected>Select District</option>";
        const selectedState = permanentStateSelect.value;
        data.districts[selectedState].forEach((district) => {
          const option = document.createElement("option");
          option.value = district;
          option.text = district;
          permanentDistrictSelect.appendChild(option);
        });
      });
    });

  document.getElementById("same_address").addEventListener("change", (event) => {
    if (event.target.checked) {
      document.getElementById("permanent_house_street").value = document.getElementById("present_house_street").value;
      document.getElementById("permanent_town").value = document.getElementById("present_town").value;
      document.getElementById("permanent_state").value = document.getElementById("present_state").value;
      document.getElementById("permanent_district").value = document.getElementById("present_district").value;
      document.getElementById("permanent_police_station").value = document.getElementById("present_police_station").value;
      document.getElementById("permanent_pin").value = document.getElementById("pin").value;
     
    } else {
      document.getElementById("permanent_house_street").value = "";
      document.getElementById("permanent_town").value = "";
      document.getElementById("permanent_state").value = "";
      document.getElementById("permanent_district").value = "";
      document.getElementById("permanent_police_station").value = "";
      document.getElementById("permanent_pin").value = "";
  
    }
  });
});
