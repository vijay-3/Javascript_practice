// Here submit button works without load new page
document
  .getElementById("user_input_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Here palindrome checking code
    const original_user_string =
      document.getElementsByClassName("user_input_box")[0].value;
    const user_string = original_user_string;
    const result = document.getElementsByClassName("result_container");

    // Check the given input is palindrome
    if (
      user_string.toLowerCase() ===
      user_string.toLowerCase().split("").reerse().join("")
    ) {
      //   user_string[0].value.toLowerCase() === (user_string[0].value).toLowerCase().split("").reverse().join(""))        This another type of condition code
      result[0].innerHTML = `${original_user_string} is palindrome.`;
    } else {
      result[0].innerHTML = `${original_user_string} is not a palindrome.`;
    }
  });