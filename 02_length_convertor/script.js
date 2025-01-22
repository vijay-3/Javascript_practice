// Centimeter to inch
function convert() {
  const centi_val = Number(document.getElementById("user_input_box").value);
  const inch_val = centi_val / 2.54;
  const result = document.getElementById("result_container");
  result.innerHTML = inch_val.toFixed(2);
}