// Get the body tag
const PARENT_AREA = document.getElementsByClassName("main_body_1")[0];

// Create the break element and add to the parent area's child
const BREAK = document.createElement("br");
PARENT_AREA.appendChild(BREAK);

const ARRAY = [6, -5, 7, 2, 4, 6, -1];
// Create the h1 tag and add to the parent area's child
const QUEST_ARRAY_ELEMENT = document.createElement("h2");
QUEST_ARRAY_ELEMENT.textContent = `Array : [${ARRAY}]`;
PARENT_AREA.appendChild(QUEST_ARRAY_ELEMENT);

// Clone the break tag and add to after the array question
const CLONED_BREAK_1 = BREAK.cloneNode(false);
PARENT_AREA.appendChild(CLONED_BREAK_1);

// Sum the positive numbers from array using filter method
const SUM_OF_POSITIVE_NUMBERS = ARRAY.filter(array_ele => array_ele >= 0).reduce(((sum_of_posi_num, positive_num) => sum_of_posi_num + positive_num), 0);
console.log(SUM_OF_POSITIVE_NUMBERS);

// Clone the question heading tag for answer label and add the tag after the break tag
const CLONED_ANS_LABEL = QUEST_ARRAY_ELEMENT.cloneNode(false);
CLONED_ANS_LABEL.textContent = `Sum of positive numbers : ${SUM_OF_POSITIVE_NUMBERS}`;
PARENT_AREA.appendChild(CLONED_ANS_LABEL);