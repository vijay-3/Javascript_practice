// Get the elements for change color process

// Color code text area
const COLOR_CODE_TEXT = document.getElementsByClassName("color_code")[0];

// Background color change button
const BACKGROUND_CHANGE_BUTTON = document.getElementsByClassName(
  "bg_color_change_button"
)[0];

// Background area
const BACKGROUND_AREA = document.getElementsByClassName(
  "bg_color_changing_container"
)[0];

// Hexadecimal code list
const HEX_CODE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

BACKGROUND_CHANGE_BUTTON.addEventListener("click", content_style);

// Generate hex color code
function color_code_gen() {
  let color_code_value = "#";
  for (let hex_digit_count = 0; hex_digit_count < 6; hex_digit_count++) {
    color_code_value += rand_hex();
  }
  return color_code_value;
}

// Random hex value
function rand_hex() {
  let hex_digit_index = Math.floor(Math.random() * 16);
  return HEX_CODE[hex_digit_index];
}

//   Style the content
let color_code = null;
function content_style() {
  color_code = color_code_gen();
  COLOR_CODE_TEXT.textContent = color_code;
  COLOR_CODE_TEXT.style.color = color_code;
  BACKGROUND_AREA.style.backgroundColor = color_code;
}

// Add the message after the copy of the text in clipboard
COLOR_CODE_TEXT.addEventListener("click", function () {
  if(color_code === null) {
    navigator.clipboard.writeText("#FFFFFF");
  }else {
  navigator.clipboard.writeText(color_code);
  }
  COLOR_CODE_TEXT.textContent = "Copied";
  COLOR_CODE_TEXT.style.color = "white";
  COLOR_CODE_TEXT.style.backgroundColor = "black";
  COLOR_CODE_TEXT.style.fontWeight = "normal";

  //   Set the original content
  setTimeout(function () {
    if(color_code === null) {
      color_code = "#FFFFFF";
      COLOR_CODE_TEXT.textContent = color_code;
    COLOR_CODE_TEXT.style.color = "black";
    COLOR_CODE_TEXT.style.backgroundColor = color_code;
    } else {
    COLOR_CODE_TEXT.textContent = color_code;
    COLOR_CODE_TEXT.style.color = color_code;
    COLOR_CODE_TEXT.style.backgroundColor = "white";
}}, 3000);
});
