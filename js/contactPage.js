const yourName = document.querySelector("your_name")
const email = document.querySelector("email")
const subject = document.querySelector("subject")
const message = document.querySelector("message")
const button = document.querySelector("button")

    


function checkIfButtonIsDisabled() {
    // if all inputs pass validation enable the button
    if (checkLength(yourName.value, 1) && checkLength(yourName.value, 4) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        // clear the message
        message.innerHTML = "";
        // disable button
        button.disabled = true;
    }
}

// call the same function for each input's keyup event
firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

// function to run when the form is submitted
function submitForm(event) {
    event.preventDefault();
    // display a message once the form has been submitted
    message.innerHTML = '<div class="message">Your message has been sent</div>';
    // clear all input values
    form.reset();
}

form.addEventListener("submit", submitForm);

// function to check if the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}