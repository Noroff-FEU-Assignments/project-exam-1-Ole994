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
        nameError.innerHTML = "Please insert your name"
    }


    // Validate e-mail
    let submittedEmail = email.value.trim();
    emailError.innerHTML = ""; // Clear earlier messages
    
    //email pattern
    let emailPattern = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

    

    if (!emailPattern.test(submittedEmail)) {
        emailError.innerHTML = "Please enter a valid email";
    }

    let subjectPattern = subject.value.trim()
    subjectError.innerHTML = "";
    if (subjectPattern.length < 15) {
        subjectError.innerHTML = "Please have at least 15 digits";
    }

    let messagePattern = message.value.trim()
    messageError.innerHTML = "";
    if (messagePattern.length < 25) {
        messageError.innerHTML += "Please enter at least 25 digits";
    }


    if (nameMsg.innerHTML === "" && emailMsg.innerHTML === "" && subjectError.innerHTML === "" && messageError.innerHTML === "") {
        console.log("Form submitted");
        succsess.innerHTML += "Thank you, I will get back to you as soon as possible";

        form.submit();
     }
}


