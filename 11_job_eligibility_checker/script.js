// Here create the eventlistener to the button
const RESULT_BUTTON = document.getElementsByClassName("result_button")[0];
RESULT_BUTTON.addEventListener("click", check_eligible);

// Create the output display area
const OUTPUT_AREA = document.createElement("div");
OUTPUT_AREA.className = "result_container";

// Get the place for insert and insert
document.getElementsByClassName("sub_container")[0].appendChild(OUTPUT_AREA);
const OUTPUT_ELEMENT = document.getElementsByClassName("result_container")[0];

// Here eligibility checking function
function check_eligible() {
  const INPUT_FORM = document.forms["user_input_form"];
  const SELETED_OPTION = INPUT_FORM.elements["eligibility"].value;
  console.log(SELETED_OPTION);
  switch (SELETED_OPTION) {
    case "Illiterate": {
      OUTPUT_ELEMENT.style.color = "red";
      return (OUTPUT_ELEMENT.innerHTML = "Sorry You Are Not Eligible for Job.");
    }
    case "Highschool": {
      OUTPUT_ELEMENT.style.color = "#F8F3D9";
      return (OUTPUT_ELEMENT.innerHTML = "Congrats! You Are Eligible for Job.");
    }
  }
}