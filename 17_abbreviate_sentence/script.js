// Get the parent element
const PARENT_AREA = document.getElementsByClassName("main_body_1")[0];

// Create the break tag
const BREAK_ELEMENT = document.createElement("br");

// Add the break tag to the parent element's child
PARENT_AREA.appendChild(BREAK_ELEMENT);

// Clone the break tag
const CLONED_BREAK_1 = BREAK_ELEMENT.cloneNode(false);

// Create the new element for question
const QUEST_ELEMENT = document.createElement("h2");
PARENT_AREA.appendChild(QUEST_ELEMENT);
QUEST_ELEMENT.textContent = "Sentence for Abbreviation:";

PARENT_AREA.appendChild(CLONED_BREAK_1);

// Clone the cloned element for place in another place
const CLONED_BREAK_2 = CLONED_BREAK_1.cloneNode(false);

const SENTENCE = "Robert Andrew George";
// Create the new element for question sentence
const QUEST_SENTENCE = document.createElement("p");
QUEST_SENTENCE.textContent = SENTENCE;
PARENT_AREA.appendChild(QUEST_SENTENCE);

PARENT_AREA.appendChild(CLONED_BREAK_2);

// Separate the sentence into word
const SENTENCE_WORD = SENTENCE.split(" ");

// Map method for create the abbreviation letter
const ABBREVIATE_LETTER = SENTENCE_WORD.map((word_ele) => word_ele.charAt(0));

// Join the letter of array to single word
const ABBREVIATE_WORD = ABBREVIATE_LETTER.join("");

// Create the new element for abbreviated word
const ABBREVIATE_ELEMENT = document.createElement("p");
ABBREVIATE_ELEMENT.textContent = ABBREVIATE_WORD;
ABBREVIATE_ELEMENT.style.fontWeight = "bold";
PARENT_AREA.appendChild(ABBREVIATE_ELEMENT);