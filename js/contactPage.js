const form = document.querySelector("form#signup");
// form.addEventListener("submit", validateForm
// );
const name = document.querySelector("name")
const email = document.querySelector("email")
const subject = document.querySelector("subject")
const message = document.querySelector("message")
const button = document.querySelector("button")
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]
// +)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.
// [0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    














/*Home*/











function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}