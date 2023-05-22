import React, { useEffect } from "react";

const JobApplicationForm = () => {
  useEffect(() => {
    // Get references to the radio button and input fields
    const unemployedRadio = document.getElementById("unemployed");
    const jobPositionInput = document.getElementById("jobPosition");
    const yearsOfEmploymentInput = document.getElementById("yearsOfEmployment");

    // Function to disable/enable the input fields based on the radio button state
    const toggleInputs = () => {
      if (unemployedRadio.checked) {
        jobPositionInput.disabled = true;
        yearsOfEmploymentInput.disabled = true;
      } else {
        jobPositionInput.disabled = false;
        yearsOfEmploymentInput.disabled = false;
      }
    };

    // Add event listener to the radio button to trigger the toggleInputs function
    unemployedRadio.addEventListener("change", toggleInputs);

    // Clean up the event listener when the component unmounts
    return () => {
      unemployedRadio.removeEventListener("change", toggleInputs);
    };
  }, []);

  return (
    <form>
      <label htmlFor='unemployed'>
        <input
          type='radio'
          id='unemployed'
          name='employmentStatus'
        />{" "}
        Unemployed
      </label>
      <br />
      <label htmlFor='employed'>
        <input
          type='radio'
          id='employed'
          name='employmentStatus'
        />{" "}
        Employed
      </label>
      <br />
      <label htmlFor='jobPosition'>Job Position:</label>
      <input
        type='text'
        id='jobPosition'
      />
      <br />
      <label htmlFor='yearsOfEmployment'>Years of Employment:</label>
      <input
        type='text'
        id='yearsOfEmployment'
      />
    </form>
  );
};

export default JobApplicationForm;
