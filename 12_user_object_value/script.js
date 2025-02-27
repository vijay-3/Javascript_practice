// Crezte area and element for output message
const STATUS_DISPLAY_AREA = document.createElement("div");
STATUS_DISPLAY_AREA.className = "message_container";
document
  .getElementsByClassName("login_container")[0]
  .appendChild(STATUS_DISPLAY_AREA);
const STATUS_DISPLAY_ELEMENT =
  document.getElementsByClassName("message_container")[0];

// Create the variable to the user value store
let user_name = null,
  user_email = null,
  user_password = null,
  user_confirm_password = null,
  user_phone_number = null;
// Create the property key for property name store
const PROPERTY_1 = "user_name",
  PROPERTY_2 = "user_email",
  PROPERTY_3 = "user_password",
  PROPERTY_4 = "user_confirm_password";
let property_5 = null;

// Empty object
let user_details = {
  status_message: () => {
    if (
      user_details[PROPERTY_1] === user_name &&
      user_details[PROPERTY_2] === user_email &&
      user_details[PROPERTY_3] === user_password &&
      user_details[PROPERTY_4] === user_confirm_password
    ) {
      if (property_5) {
        if (user_details[property_5] === user_phone_number) {
        }
      }
      STATUS_DISPLAY_ELEMENT.style.color = "green";
      STATUS_DISPLAY_ELEMENT.style.fontWeight = "bold";
      STATUS_DISPLAY_ELEMENT.innerHTML = "Successfully assigned values.";
      document.getElementById("user_name").disabled = true;
      document.getElementById("user_email").disabled = true;
      document.getElementById("user_password").disabled = true;
      document.getElementById("user_confirm_password").disabled = true;
    } else {
      STATUS_DISPLAY_ELEMENT.style.color = "red";
      STATUS_DISPLAY_ELEMENT.style.fontWeight = "bold";
      STATUS_DISPLAY_ELEMENT.innerHTML = "Failed to assign values.";
    }
  },
};

// Prevent the submit action
const LOGIN_FORM = document.getElementById("user_login_form");
LOGIN_FORM.addEventListener("submit", function (event) {
  event.preventDefault();

  // User input value
  (user_name = document.getElementById("user_name").value),
    (user_email = document.getElementById("user_email").value),
    (user_password = document.getElementById("user_password").value),
    (user_confirm_password = document.getElementById(
      "user_confirm_password"
    ).value);
  if (document.getElementById("user_phone_number")) {
    user_phone_number = document.getElementById("user_phone_number").value;
  }

  // Assigning the value to the property
  (user_details[PROPERTY_1] = user_name),
    (user_details[PROPERTY_2] = user_email),
    (user_details[PROPERTY_3] = user_password),
    (user_details[PROPERTY_4] = user_confirm_password);
  if (user_phone_number) {
    user_details[property_5] = user_phone_number;
  }
  user_details.status_message();
});

// Edit button
const LOGIN_FORM_1 = document.getElementsByClassName("user_edit_button")[0];
const USER_INPUT_BOX = document.getElementsByTagName("input");
LOGIN_FORM_1.addEventListener("click", function () {
  // Each input box enable when hover
  // const USER_INPUT_BOX = document.getElementById("user_name"), USER_EMAIL_BOX = document.getElementById("user_email")
  USER_INPUT_BOX[0].addEventListener("mouseover", function () {
    USER_INPUT_BOX[0].disabled = false;
  });
  USER_INPUT_BOX[1].addEventListener("mouseover", function () {
    USER_INPUT_BOX[1].disabled = false;
  });
  USER_INPUT_BOX[2].addEventListener("mouseover", function () {
    USER_INPUT_BOX[2].disabled = false;
  });
  USER_INPUT_BOX[3].addEventListener("mouseover", function () {
    USER_INPUT_BOX[3].disabled = false;
  });
  if (USER_INPUT_BOX[4]) {
    USER_INPUT_BOX[4].addEventListener("mouseover", function () {
      USER_INPUT_BOX[4].disabled = false;
    });
  }

  // Each input box disable when not hover
  USER_INPUT_BOX[0].addEventListener("mouseout", function () {
    USER_INPUT_BOX[0].disabled = true;
  });
  USER_INPUT_BOX[1].addEventListener("mouseout", function () {
    USER_INPUT_BOX[1].disabled = true;
  });
  USER_INPUT_BOX[2].addEventListener("mouseout", function () {
    USER_INPUT_BOX[2].disabled = true;
  });
  USER_INPUT_BOX[3].addEventListener("mouseout", function () {
    USER_INPUT_BOX[3].disabled = true;
  });
  if (USER_INPUT_BOX[4]) {
    USER_INPUT_BOX[4].addEventListener("mouseout", function () {
      USER_INPUT_BOX[4].disabled = true;
    });
  }
});

// Add a new element
const ADD_BUTTON = document.getElementsByClassName("user_add_button")[0];
ADD_BUTTON.addEventListener("click", function () {
  // Create the new div label element and input element add to the created div container using insertbefore method

  // Create the parent and child node for use the insertbefore() method
  const CONTAINER_ELEMENT_PARENT_NODE =
    document.getElementById("user_login_form");
  const NEAR_ELEMENT_CHILD_NODE = document.getElementsByTagName("br")[0];

  //   Create the container for label and input elements place using insertbefore() method
  const NEW_ELEMENT_CONTAINER_AREA = document.createElement("div");
  NEW_ELEMENT_CONTAINER_AREA.className = "form_element";
  CONTAINER_ELEMENT_PARENT_NODE.insertBefore(
    NEW_ELEMENT_CONTAINER_AREA,
    NEAR_ELEMENT_CHILD_NODE
  );

  //   Create the label and place inside the created div
  const NEW_ELEMENT_LABEL_AREA = document.createElement("label");
  NEW_ELEMENT_LABEL_AREA.setAttribute("for", "user_phone_number");
  const NEW_ELEMENT_LABEL_CONTENT = prompt(
    "Enter the text for label's inside content : "
  );

  //   Check the prompt correctly gathered the input
  if (!NEW_ELEMENT_LABEL_CONTENT) {
    document.getElementsByClassName("form_element")[4].remove();
    return;
  }
  NEW_ELEMENT_LABEL_AREA.textContent = `${NEW_ELEMENT_LABEL_CONTENT}`;
  const NEW_ELEMENT_CONTAINER_ELEMENT =
    document.getElementsByClassName("form_element")[4];
  NEW_ELEMENT_CONTAINER_ELEMENT.appendChild(NEW_ELEMENT_LABEL_AREA);

  // Create the new input element and add to the created div container
  const NEW_ELEMENT_INPUT_AREA = document.createElement("input");
  NEW_ELEMENT_INPUT_AREA.id = "user_phone_number";
  NEW_ELEMENT_INPUT_AREA.setAttribute("type", "tel");
  NEW_ELEMENT_INPUT_AREA.setAttribute("maxlength", "10");
  NEW_ELEMENT_CONTAINER_ELEMENT.appendChild(NEW_ELEMENT_INPUT_AREA);
  const NEW_ELEMENT_INPUT_ELEMENT_VALUE =
    document.getElementById("user_phone_number").value;

  // Add the created element to the object
  const PROPERTY_5 = "user_phone_number";
  user_details[PROPERTY_5] = NEW_ELEMENT_INPUT_ELEMENT_VALUE;
});