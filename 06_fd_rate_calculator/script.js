// Here prevent the page reloading
document
  .getElementById("user_input_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Here the calculate fd rate
    const work_month = Number(
      document.getElementsByClassName("user_input_box")[0].value
    );
    let interest_rate = 0;
    const result = document.getElementsByClassName("result_container");

    if (work_month > 0 && work_month < 3) {
      interest_rate = 5.8;
    } else if (work_month >= 3 && work_month <= 6) {
      interest_rate = 6.5;
    } else if (work_month >= 7 && work_month <= 9) {
      interest_rate = 6.8;
    } else {
      interest_rate = 7;
    }
    result[0].innerHTML = `Your interest rate is ${interest_rate}%`;
  });
