function generate() {
    const user_string = document.getElementById("input_box").value;
    const output = document.getElementById("letter_result");
    // const result = user_string.charAt(Math.floor(Math.random() * user_string.length));
    // output.innerHTML = result;
    output.innerHTML = user_string.charAt(Math.floor(Math.random() * user_string.length));
    console.log(result);
}