// Click event happens when click the button
const SHOW_BUTTON = document.getElementsByClassName("result_button");
SHOW_BUTTON[0].addEventListener("click", city_info);

// Created element outside the function because I want to only one time create this element
//   Creating the result display from script
let result_area = document.createElement("div");
result_area.className = "result_container";

//   Select the area for display the output and place the element
document.getElementsByClassName("sub_container")[0].appendChild(result_area);

// Show the info about selected city
function city_info() {
  const USER_INPUT = document.getElementById("city");
  const SELECTED_CITY = USER_INPUT.options[USER_INPUT.selectedIndex].value;
  let language = "",
  population = 0,
  literacy_rate = 0;
  const OUTPUT_ELEMENT = document.getElementsByClassName("result_container")[0];
  
  //   Assign the value to the city details
  switch (SELECTED_CITY) {
    case "Coimbatore": {
      language = "Tamil";
      population = 3123000;
      literacy_rate = 83.98;
      break;
    }
    case "Chennai": {
      language = "Tamil";
      population = 12658000;
      literacy_rate = 90.18;
      break;
    }
    case "Tirupur": {
      language = "Tamil";
      population = 2875948;
      literacy_rate = 78.68;
      break;
    }
    case "Madurai": {
      language = "Tamil";
      population = 2142000;
      literacy_rate = 83.45;
      break;
    }
    case "Thirunelveli": {
      language = "Tamil";
      population = 303852;
      literacy_rate = 83.45;
      break;
    }
    default: {
      OUTPUT_ELEMENT.style.color = "red";
      return (OUTPUT_ELEMENT.innerHTML = "Please Select Any City.");
    }
  }
  
  const OUTPUT_MESSAGE = `The Indian city of ${SELECTED_CITY} has a population of ${population}. Language spoken is ${language} andd literacy rate is ${literacy_rate}%.`;
  OUTPUT_ELEMENT.style.color = "#fbffe4";
  OUTPUT_ELEMENT.innerHTML = OUTPUT_MESSAGE;
}