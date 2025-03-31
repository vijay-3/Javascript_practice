// First course name list
// Get the select element
const COURSE_DROPDOWN_1 = document.getElementById("course_name_1");

// Create the course name in array
const COURSE_LIST_1 = ["ECE", "IT", "CSC", "EEE", "BA"];

// Create the option element and insert the value and text content
COURSE_LIST_1.forEach((arr_ele_1) => {
  const COURSE_OPT_1 = document.createElement("option");
  COURSE_OPT_1.setAttribute("value", arr_ele_1);
  COURSE_OPT_1.textContent = arr_ele_1;
  COURSE_DROPDOWN_1.appendChild(COURSE_OPT_1);
});

// Display the selected option below the dropdown box
COURSE_DROPDOWN_1.addEventListener("change", display_selected_course_name_1);

// Display message function
function display_selected_course_name_1() {
  // Get the display area
  const OUTPUT_ELEMENT_1 = document.getElementsByClassName("output_area_1")[0];
  OUTPUT_ELEMENT_1.textContent =
    COURSE_DROPDOWN_1.options[COURSE_DROPDOWN_1.selectedIndex].value;
}
// --------------------------------------------------------

// Second course name list
// Get the select element
const COURSE_DROPDOWN_2 = document.getElementById("course_name_2");

// Create the course name in array
const COURSE_LIST_2 = ["ECE", "CSE", "IT", "EEE", "MECH", "CIVIL"];

// Create the option element and insert value and text content
COURSE_LIST_2.forEach((arr_ele_2) => {
  const COURSE_OPT_2 = document.createElement("option");
  COURSE_OPT_2.setAttribute("value", arr_ele_2);
  COURSE_OPT_2.textContent = arr_ele_2;
  COURSE_DROPDOWN_2.appendChild(COURSE_OPT_2);
});

// Display the selected option value
COURSE_DROPDOWN_2.addEventListener("change", display_selected_course_name_2);

// Display message function
function display_selected_course_name_2() {
  // Get the display area
  const OUTPUT_ELEMENT_2 = document.getElementsByClassName("output_area_2")[0];
  OUTPUT_ELEMENT_2.textContent =
    COURSE_DROPDOWN_2.options[COURSE_DROPDOWN_2.selectedIndex].value;
}
// --------------------------------------------------------

// Sum the non-negative number from inside array
const COURSE_DROPDOWN_3 = document.getElementById("sum_of_num");

// Create the number list
const NUMBER_LIST = [6, -5, 7, -2, 4, 6, -1];

// Create the option element and insert the value and text content
let index_num = 1,
  sum_of_positive = 0;

NUMBER_LIST.forEach((arr_ele_3) => {
  const NUMBER_OPT = document.createElement("option");
  NUMBER_OPT.textContent = arr_ele_3;
  COURSE_DROPDOWN_3.appendChild(NUMBER_OPT);
  COURSE_DROPDOWN_3.options[index_num].disabled = true;
  index_num++;

  // Calculate the positive number
  if (arr_ele_3 > 0) {
    sum_of_positive += arr_ele_3;
  }
});

// Display the sum of positive number
// Get the button
const CALCULATE_BUTTON = document.getElementsByClassName("calc_button")[0];

// Get the display area and display the message
const DISPLAY_ELEMENT = document.getElementsByClassName("output_area_3")[0];

// Add the eventlistener to DISPLAY_BUTTON for click
CALCULATE_BUTTON.addEventListener("click", display_sum_of_positive_number);

// Create the function for display the content
function display_sum_of_positive_number() {
  DISPLAY_ELEMENT.textContent = sum_of_positive;
}