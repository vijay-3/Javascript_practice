// Centimeter to inch
function convert() {
    const celsius_val = Number(document.getElementById("user_input_box").value);
    const fahrenhit_val = (celsius_val / 1.8) + 32;
    const result = document.getElementById("result_container");
    result.innerHTML = fahrenhit_val.toFixed(0) + "ºF";
  }