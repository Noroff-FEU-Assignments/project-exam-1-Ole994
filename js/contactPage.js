const form = document.querySelector("#signup");
form.addEventListener("submit", validateForm
);


const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
console.log(message)

const button = document.querySelector("#submitFormButton");

const succsess = document.querySelector(".succsess");

function validateForm(e) {
    e.preventDefault();



    // Validate Name, minimum 2 characters long, no digits
    let submitName = name.value.trim();
    nameError.innerHTML = "";



    if (/\d/.test(submitName)) {
        nameError.innerHTML += "The name cannot contain any digits!";
    }
    if (submitName < 5) {
        nameError.innerHTML = "Dette går ikkke"
    }







    
    // Validate e-mail
    let submittedEmail = email.value.trim();
    emailError.innerHTML = ""; // Clear earlier messages
    let emailPattern = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

    //email pattern


    if (!emailPattern.test(submittedEmail)) {
        emailError.innerHTML = "Please enter a valid email";
    }

    let subjectPattern = subject.value.trim()
    subjectError.innerHTML = "";
    if (subjectPattern.length < 10) {
        subjectError.innerHTML = "Please enter a valid email";
    }

    let messagePattern = message.value.trim()
    messageError.innerHTML = "";
    if (messagePattern.length < 25) {
        messageError.innerHTML += "Please enter at least 15 digits";
    }


    if (nameMsg.innerHTML === "" && emailMsg.innerHTML === "" && subjectError.innerHTML === "" && messageError.innerHTML === "") {
        console.log("Form submitted");
        succsess.innerHTML += "succsess";

        //form.submit();
     }

}




// let submitEmail

// if (!emailPattern.test(submitEmail)) {
//     emailMsg.innerHTML += "Please enter a valid email";}


// let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




































































// function checkIfButtonIsDisabled() {
//     console.log(name.value,subject.value,email.value)
//     // if all inputs pass validation enable the button
//     if (checkLength(name.value, 5) && checkLength(subject.value, 15) && validateEmail(email.value)) {
//         button.disabled = false;
//     } else {
//         // clear the message
//         message.innerHTML = "";
//         // disable button
//         button.disabled = true;
//     }
// }

// // call the same function for each input's keyup event
// name.addEventListener("keyup", checkIfButtonIsDisabled);
// email.addEventListener("keyup", checkIfButtonIsDisabled);
// subject.addEventListener("keyup", checkIfButtonIsDisabled);

// // function to run when the form is submitted
// function submitForm(event) {
//     event.preventDefault();
//     if (checkLength(name.value, 3)){
//         nameError.style.display="none"

//     }
//     else{
//         nameError.style.display="block"
//     }
//     // display a message once the form has been submitted
//     message.innerHTML = '<div class="message">Your message has been sent</div>';
//     // clear all input values
//     form.reset();
// }

// form.addEventListener("submit", submitForm);

// // function to check if the length of the input value is valid
// function checkLength(value, len) {
//     if (value.trim().length >= len) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function validateEmail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
// } 














// /*Home*/











// function validateEmail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
// }