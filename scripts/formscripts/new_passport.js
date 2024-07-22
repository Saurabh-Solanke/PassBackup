document.addEventListener("DOMContentLoaded", () => {
  // Get user from session storage
  const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

  // Initialize arrays for new application forms and drafts
  let NewPassportApplicationForms =
    JSON.parse(localStorage.getItem("NewPassportApplicationForms")) || [];
  let drafts = JSON.parse(localStorage.getItem("drafts")) || [];

  // Function to get the current date and time in the desired format
  function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString("en-GB");
    return { date, time };
  }

  // Function to generate a new ID for forms or drafts
  function generateNewId(array) {
    return array.length ? array[array.length - 1].id + 1 : 1;
  }

  // Function to save data from a section to the new application form object
  function saveSectionData(sectionIndex, sectionData) {
    let existingForm = NewPassportApplicationForms.find(
      (form) => form.userid === activeUser.id && !form.submissiondate
    );

    if (!existingForm) {
      existingForm = {
        id: generateNewId(NewPassportApplicationForms),
        newpassportapplicationformid: generateNewId(
          NewPassportApplicationForms
        ),
        userid: activeUser.id,
        section1: {},
        section2: {},
        section3: {},
        section4: {},
        section5: {},
        section6: {},
        section7: {},
        submissiondate: "",
        submissiontime: "",
      };
      NewPassportApplicationForms.push(existingForm);
    }

    existingForm[`section${sectionIndex}`] = sectionData;

    localStorage.setItem(
      "NewPassportApplicationForms",
      JSON.stringify(NewPassportApplicationForms)
    );
  }

  // Event listener for "Next" buttons to save section data
  document.getElementById("nextButton1").addEventListener("click", () => {
    const section1Data = {
      application_type: document.querySelector(
        'input[name="application_type"]:checked'
      ).value,
      passport_booklet_type: document.getElementById("passport_booklet_type")
        .value,
      validity_required: document.getElementById("validity_required").value,
    };
    saveSectionData(1, section1Data);
  });

  document.getElementById("nextButton2").addEventListener("click", () => {
    const section2Data = {
      given_name: document.getElementById("given_name").value,
      surname: document.getElementById("surname").value,
      known_by_other_names:
        document.querySelector('input[name="known_by_other_names"]:checked')
          ?.value || "",
      aliases: document.getElementById("aliases").value,
      changed_name:
        document.querySelector('input[name="changed_name"]:checked')?.value ||
        "",
      previous_name: document.getElementById("previous_name").value,
      dob: document.getElementById("dob").value,
      place_of_birth: document.getElementById("place_of_birth").value,
      state: document.getElementById("state").value,
      district: document.getElementById("district").value,
      region_country: document.getElementById("region_country").value,
      gender:
        document.querySelector('input[name="gender"]:checked')?.value || "",
      marital_status: document.getElementById("marital_status").value,
      citizenship: document.getElementById("citizenship").value,
      pan: document.getElementById("pan").value,
      voter_id: document.getElementById("voter_id").value,
      employment_type: document.getElementById("employment_type").value,
      organization_name: document.getElementById("organization_name").value,
      parent_spouse_government_servant:
        document.querySelector(
          'input[name="parent_spouse_government_servant"]:checked'
        )?.value || "",
      education: document.getElementById("education").value,
      non_ecr:
        document.querySelector('input[name="non_ecr"]:checked')?.value || "",
      distinguishing_mark: document.getElementById("distinguishing_mark").value,
      aadhaar: document.getElementById("aadhaar").value,
    };
    saveSectionData(2, section2Data);
  });

  document.getElementById("nextButton3").addEventListener("click", () => {
    const section3Data = {
      father_given_name: document.getElementById("father_given_name").value,
      father_surname: document.getElementById("father_surname").value,
      mother_given_name: document.getElementById("mother_given_name").value,
      mother_surname: document.getElementById("mother_surname").value,
      minor_or_adult:
        document.querySelector('input[name="minor_or_adult"]:checked')?.value ||
        "",
      legal_guardian_given_name:
        document.getElementById("legal_guardian_given_name").value || "",
      legal_guardian_surname:
        document.getElementById("legal_guardian_surname").value || "",
      father_passport_number:
        document.getElementById("father_passport_number").value || "",
      father_nationality:
        document.getElementById("father_nationality").value || "",
      mother_passport_number:
        document.getElementById("mother_passport_number").value || "",
      mother_nationality:
        document.getElementById("mother_nationality").value || "",
      spouse_given_name:
        document.getElementById("spouse_given_name").value || "",
      spouse_surname: document.getElementById("spouse_surname").value || "",
    };
    saveSectionData(3, section3Data);
  });

  document.getElementById("nextButton4").addEventListener("click", () => {
    const section4Data = {
      present_house_street: document.getElementById("present_house_street")
        .value,
      present_town: document.getElementById("present_town").value,
      present_state: document.getElementById("present_state").value,
      present_district: document.getElementById("present_district").value,
      present_police_station: document.getElementById("present_police_station")
        .value,
      pin: document.getElementById("pin").value,
      mobile_number: document.getElementById("mobile_number").value,
      telephone_number: document.getElementById("telephone_number").value,
      email: document.getElementById("email").value,
      same_address: document.getElementById("same_address").checked,
      permanent_house_street: document.getElementById("permanent_house_street")
        .value,
      permanent_town: document.getElementById("permanent_town").value,
      permanent_state: document.getElementById("permanent_state").value,
      permanent_district: document.getElementById("permanent_district").value,
      permanent_police_station: document.getElementById(
        "permanent_police_station"
      ).value,
      permanent_pin: document.getElementById("permanent_pin").value,
    };
    saveSectionData(4, section4Data);
  });

  document.getElementById("nextButton5").addEventListener("click", () => {
    const section5Data = {
      emergency_contact_name: document.getElementById("emergency_contact_name")
        .value,
      emergency_contact_address: document.getElementById(
        "emergency_contact_address"
      ).value,
      emergency_contact_mobile: document.getElementById(
        "emergency_contact_mobile"
      ).value,
      emergency_contact_telephone: document.getElementById(
        "emergency_contact_telephone"
      ).value,
      emergency_contact_email: document.getElementById(
        "emergency_contact_email"
      ).value,
    };
    saveSectionData(5, section5Data);
  });

  document.getElementById("nextButton6").addEventListener("click", () => {
    const section6Data = {
      criminal_proceedings_1:
        document.querySelector('input[name="criminal_proceedings_1"]:checked')
          ?.value || "",
      court_name_1:
        document.querySelector('input[name="court_name_1"]')?.value || "",
      case_number_1:
        document.querySelector('input[name="case_number_1"]')?.value || "",
      law_section_1:
        document.querySelector('input[name="law_section_1"]')?.value || "",
      criminal_proceedings_2:
        document.querySelector('input[name="criminal_proceedings_2"]:checked')
          ?.value || "",
      court_name_2:
        document.querySelector('input[name="court_name_2"]')?.value || "",
      case_number_2:
        document.querySelector('input[name="case_number_2"]')?.value || "",
      law_section_2:
        document.querySelector('input[name="law_section_2"]')?.value || "",
      criminal_proceedings_3:
        document.querySelector('input[name="criminal_proceedings_3"]:checked')
          ?.value || "",
      court_name_3:
        document.querySelector('input[name="court_name_3"]')?.value || "",
      case_number_3:
        document.querySelector('input[name="case_number_3"]')?.value || "",
      law_section_3:
        document.querySelector('input[name="law_section_3"]')?.value || "",
      criminal_proceedings_4:
        document.querySelector('input[name="criminal_proceedings_4"]:checked')
          ?.value || "",
      court_name_4:
        document.querySelector('input[name="court_name_4"]')?.value || "",
      case_number_4:
        document.querySelector('input[name="case_number_4"]')?.value || "",
      law_section_4:
        document.querySelector('input[name="law_section_4"]')?.value || "",
      criminal_convictions:
        document.querySelector('input[name="criminal_convictions"]:checked')
          ?.value || "",
      court_name_5:
        document.querySelector('input[name="court_name_5"]')?.value || "",
      case_number_5:
        document.querySelector('input[name="case_number_5"]')?.value || "",
      conviction_date:
        document.querySelector('input[name="conviction_date"]')?.value || "",
      refused_passport_1:
        document.querySelector('input[name="refused_passport_1"]:checked')
          ?.value || "",
      refusal_reason:
        document.querySelector('input[name="refusal_reason"]')?.value || "",
      refused_passport_2:
        document.querySelector('input[name="refused_passport_2"]:checked')
          ?.value || "",
      impounded_passport_number:
        document.querySelector('input[name="impounded_passport_number"]')
          ?.value || "",
      impounding_reason:
        document.querySelector('input[name="impounding_reason"]')?.value || "",
      refused_passport_3:
        document.querySelector('input[name="refused_passport_3"]:checked')
          ?.value || "",
      revoked_passport_number:
        document.querySelector('input[name="revoked_passport_number"]')
          ?.value || "",
      revocation_reason:
        document.querySelector('input[name="revocation_reason"]')?.value || "",
      granted_citizenship_1:
        document.querySelector('input[name="granted_citizenship_1"]:checked')
          ?.value || "",
      region_country_granted:
        document.querySelector('input[name="region_country_granted"]')?.value ||
        "",
      granted_citizenship_2:
        document.querySelector('input[name="granted_citizenship_2"]:checked')
          ?.value || "",
      region_country_held:
        document.querySelector('input[name="region_country_held"]')?.value ||
        "",
      granted_citizenship_3:
        document.querySelector('input[name="granted_citizenship_3"]:checked')
          ?.value || "",
      surrendered_passport_number:
        document.querySelector('input[name="surrendered_passport_number"]')
          ?.value || "",
      granted_citizenship_4:
        document.querySelector('input[name="granted_citizenship_4"]:checked')
          ?.value || "",
      application_details:
        document.querySelector('input[name="application_details"]')?.value ||
        "",
      application_place:
        document.querySelector('input[name="application_place"]')?.value || "",
      surrendered_passport_1:
        document.querySelector('input[name="surrendered_passport_1"]:checked')
          ?.value || "",
      ec_no: document.querySelector('input[name="ec_no"]')?.value || "",
      ec_issue_date:
        document.querySelector('input[name="ec_issue_date"]')?.value || "",
      issuing_authority:
        document.querySelector('input[name="issuing_authority"]')?.value || "",
      return_date:
        document.querySelector('input[name="return_date"]')?.value || "",
      return_region:
        document.querySelector('input[name="return_region"]')?.value || "",
      ec_reason: document.querySelector('input[name="ec_reason"]')?.value || "",
      surrendered_passport_2:
        document.querySelector('input[name="surrendered_passport_2"]:checked')
          ?.value || "",
      deported_details:
        document.querySelector('input[name="deported_details"]')?.value || "",
      surrendered_passport_3:
        document.querySelector('input[name="surrendered_passport_3"]:checked')
          ?.value || "",
      repatriated_details:
        document.querySelector('input[name="repatriated_details"]')?.value ||
        "",
    };
    saveSectionData(6, section6Data);
  });

  document.getElementById("goToPaymentButton").addEventListener("click", () => {
    const section7Data = {
      declaration_place: document.getElementById("declaration_place").value,
      declaration_date: document.getElementById("declaration_date").value,
      applicant_signature: document.getElementById("applicant_signature").value,
      left_hand_thumb_imp: document.getElementById("left_hand_thumb_imp").value,
      applicant_photo: document.getElementById("applicant_photo").value,
    };

    const currentDateTime = getCurrentDateTime();
    saveSectionData(7, section7Data);

    let existingForm = NewPassportApplicationForms.find(
      (form) => form.userid === activeUser.id && !form.submissiondate
    );
    existingForm.submissiondate = currentDateTime.date;
    existingForm.submissiontime = currentDateTime.time;
    existingForm.payment = "pending";

    localStorage.setItem(
      "NewPassportApplicationForms",
      JSON.stringify(NewPassportApplicationForms)
    );
    // var paymentModal = new bootstrap.Modal(
    //   document.getElementById("paymentModal")
    // );
    // paymentModal.show();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const applicationType = localStorage.getItem("applicationType");
  const passportBookletType = localStorage.getItem("passportBookletType");

  if (applicationType) {
    document.getElementById(applicationType).checked = true;
  }

  if (passportBookletType) {
    document.getElementById("passport_booklet_type").value =
      passportBookletType;
  }
});
