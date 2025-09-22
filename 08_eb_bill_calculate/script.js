// Submit button works without reload the page
const SUBMIT_BUTTON = document.getElementById("user_input_form");
SUBMIT_BUTTON.addEventListener("submit", function (event) {
  event.preventDefault();
  const USER_ORIGINAL_EB_UNIT = Number(
    document.getElementsByClassName("user_input_box")[0].value
  );
  let user_unit = USER_ORIGINAL_EB_UNIT;
  const OUTPUT = document.getElementsByClassName("result_container");

  // EB Bill Calculation code
  let eb_cost = 0,
    unit_50 = 0,
    unit_150 = 0,
    unit_250 = 0,
    unit_250_above = 0;

  // First 50 Units
  if (user_unit > 0 && user_unit <= 50) {
    unit_50 = user_unit * 0.75;
  } else if (user_unit > 50) {
    unit_50 = 50 * 0.75;
  }

  // 51 to 150 Units
  if (user_unit > 50 && user_unit <= 150) {
    unit_150 = user_unit - 50;
    unit_150 = unit_150 * 1;
  } else if (user_unit > 150) {
    unit_150 = 100 * 1;
  }

  // 151 to 250 Units
  if (user_unit > 150 && user_unit <= 250) {
    unit_250 = user_unit - 150;
    unit_250 = unit_250 * 1.3;
  } else if (user_unit > 250) {
    unit_250 = 100 * 1.3;
  }

  // 251 and above
  if (user_unit > 250) {
    unit_250_above = user_unit - 250;
    unit_250_above = unit_250_above * 1.5;
  }
  
  // Here the output
  eb_cost = unit_50 + unit_150 + unit_250 + unit_250_above;
  OUTPUT[0].innerHTML = eb_cost.toFixed(2);
});