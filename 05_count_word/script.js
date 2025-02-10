function word_count() {
  const user_text = document.getElementById("input_text_area").value;
  const user_word = user_text.split(" ");
  const num_of_words = user_word.length;
  let result = document.getElementsByClassName("result_area");
  result[0].innerHTML = `${num_of_words} words`;
}
