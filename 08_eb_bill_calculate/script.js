// EB unit cost
let per_unit_0_to_50 = 0.75;
let per_unit_51_to_150 = 1;
let per_unit_151_to_250 = 1.3;
let per_unit_251_to_above = 1.5;

// Create the element for display the unit cost details
const UNIT_DETAIL_AREA = document.createElement("div");

// Style the UNIT_DETAIL_AREA element
UNIT_DETAIL_AREA.style.backgroundColor = "#ffff80";
UNIT_DETAIL_AREA.style.width = "maxcontent";
UNIT_DETAIL_AREA.style.height = "maxcontent";
UNIT_DETAIL_AREA.style.padding = "10px";
UNIT_DETAIL_AREA.style.position = "absolute";
UNIT_DETAIL_AREA.style.right = "10px";
UNIT_DETAIL_AREA.style.bottom = "10px";
UNIT_DETAIL_AREA.style.fontWeight = "bold";
UNIT_DETAIL_AREA.style.borderRadius = "8px";
UNIT_DETAIL_AREA.style.fontSize = "20px";
UNIT_DETAIL_AREA.setAttribute("className", "unit_cost_detail");
UNIT_DETAIL_AREA.innerHTML = `<pre><h3 style = "justify-self: center; color: red;">Unit Cost Detail</h3> <p>0 to 50 Unit      : ${per_unit_0_to_50}</p> <p>51 to 150 Unit    : ${per_unit_51_to_150}</p> <p>151 to 250 Unit   : ${per_unit_151_to_250}</p> <p>251 to above Unit : ${per_unit_251_to_above}</p></pre>`;

// Get the whole page element and add the element
const FULL_PAGE = document.getElementsByClassName("main_container")[0];
FULL_PAGE.append(UNIT_DETAIL_AREA);

// Submit button works without reload the page
const SUBMIT_BUTTON = document.getElementById("user_input_form");
SUBMIT_BUTTON.addEventListener("submit", function (event) {
  event.preventDefault();
  const USER_ORIGINAL_EB_UNIT = Number(
    document.getElementsByClassName("user_input_box")[0].value
  );
  let user_unit = USER_ORIGINAL_EB_UNIT;
  const OUTPUT = document.getElementsByClassName("result_container")[0];

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
  OUTPUT.innerHTML = eb_cost.toFixed(2);
});
