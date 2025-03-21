// Get the select element
const COURSE_DROPDOWN = document.getElementById("course_name");

// Create the option tag
function create_element() {
  return document.createElement("option");
}
const COURSE = ["ECE", "CSE", "IT", "EEE", "MECH", "CIVIL"];
// Get the option element and place
function add_option() {
  for (let array_value of COURSE) {
    const OPTION_VARIABLE = create_element();
    OPTION_VARIABLE.setAttribute("value", array_value);
    OPTION_VARIABLE.textContent = array_value;
    COURSE_DROPDOWN.appendChild(OPTION_VARIABLE);
  }
}

add_option();

// Create the display element for show the selected option
const OUTPUT_ELEMENT = document.getElementsByClassName("output")[0];

// Show the selected option
COURSE_DROPDOWN.addEventListener("change", () => {
  OUTPUT_ELEMENT.textContent = `Selected course is ${
    COURSE_DROPDOWN.options[COURSE_DROPDOWN.selectedIndex].value
  }`;
  console.log(COURSE_DROPDOWN.options[COURSE_DROPDOWN.selectedIndex].value);
});
