// Create and place the result area
let result_area = document.createElement("div");
result_area.className = "result_container";
document.getElementsByClassName("sub_container")[0].appendChild(result_area);
const OUTPUT_ELEMENT = document.getElementsByClassName("result_container")[0];

// Create the click event
const RESULT_BUTTON = document.getElementsByClassName("result_button")[0];
RESULT_BUTTON.addEventListener("click", calculate);

// Calculate function
function calculate() {
  const USER_INPUT = document.getElementsByClassName("user_input_box")[0].value;
  const NUM_1 = Number(USER_INPUT.split(" ")[0]),
    NUM_2 = Number(USER_INPUT.split(" ")[2]),
    OPERATION = String(USER_INPUT.split(" ")[1]);
  let final_output = 0;

  // Calculate operation
  switch (OPERATION) {
    case "+": {
      final_output = NUM_1 + NUM_2;
      break;
    }
    case "-": {
      final_output = NUM_1 - NUM_2;
      break;
    }
    case "*": {
      final_output = NUM_1 * NUM_2;
      break;
    }
    case "/": {
      final_output = NUM_1 / NUM_2;
      break;
    }
    case "%": {
      final_output = NUM_1 % NUM_2;
      break;
    }
    default: {
      OUTPUT_ELEMENT.style.color = "red";
      return (OUTPUT_ELEMENT.innerHTML = "Sorry Invalid Input");
    }
  }
  OUTPUT_ELEMENT.style.color = "#fff2db";
  OUTPUT_ELEMENT.innerHTML = final_output;
}