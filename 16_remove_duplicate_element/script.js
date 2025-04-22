// Get the Parent element
const PARENT_AREA = document.getElementsByClassName("main_body_1")[0];

// Create the break element and add to the parent element
const BREAK = document.createElement("br");
BREAK.className = "br_1";
PARENT_AREA.appendChild(BREAK);

// Clone the BREAK
const CLONED_BREAK = document
  .getElementsByClassName("br_1")[0]
  .cloneNode(false);

// Create the new element and add to the parent element and add the question array
const ARRAY_QUEST_AREA = document.createElement("h2");
ARRAY_QUEST_AREA.className = "array_quest";
PARENT_AREA.appendChild(ARRAY_QUEST_AREA);
const ARRAY = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3];
ARRAY_QUEST_AREA.textContent = `Array : [${ARRAY}]`;

// Add the break tag
PARENT_AREA.appendChild(CLONED_BREAK);

// Create the new element and add to the parent element and add the removed duplicate array
const ARRAY_AREA = document.createElement("h3");
ARRAY_AREA.className = "array_1";
PARENT_AREA.appendChild(ARRAY_AREA);
const ARRAY_ELEMENT = document.getElementsByClassName("array_1")[0];

// Reduce method used for reeove and create the new array without duplicate element
const CLEAR_ARRAY = ARRAY.reduce((total_array, array_element) => {
  if (!total_array.includes(array_element)) {
    total_array.push(array_element);
  }
  return total_array;
}, []);

// Add the new array to the parent element's child
ARRAY_ELEMENT.textContent = `Cleared Array : [${CLEAR_ARRAY}]`;