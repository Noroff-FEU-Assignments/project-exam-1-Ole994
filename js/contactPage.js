const form = document.querySelector("form#signup");
//  form.addEventListener("submit", validateForm
//  );
const name = document.querySelector("#name")
const nameError = document.querySelector("#name-error")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")
const button = document.querySelector("#submitFormButton")

// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]
// +)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.
// [0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


 
   
function checkIfButtonIsDisabled() {
    console.log(name.value,subject.value,email.value)
    // if all inputs pass validation enable the button
    if (checkLength(name.value, 3) && checkLength(subject.value, 4) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        // clear the message
        message.innerHTML = "";
        // disable button
        button.disabled = true;
    }
}

// call the same function for each input's keyup event
name.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);

// function to run when the form is submitted
function submitForm(event) {
    event.preventDefault();
    if (checkLength(name.value, 3)){
        nameError.style.display="none"
        
    }
    else{
        nameError.style.display="block"
    }
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














/*Home*/











function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}