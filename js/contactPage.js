function validation (){
    const yourMame = document.querySelector(".yourName").value;
    const subject = document.querySelector(".subject").value;
    const phone = document.querySelector(".phone").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;
    const error_message = document.querySelector(".error_message").value;
    const text;

    error_message.style.padding = "10px";

    if(yourName.length <5){
        text = "please enter your real name";
        error_message.innerHtml = text;
        return false;
    }

    if(subject.length <10){
        text = "please enter correct subject";
        error_message.innerHtml = text;
        return false;
    }

    if(isNaN (phone) || phone.length != 10){
        text = "please enter valid number";
        error_message.innerHtml = text;
        return false;
    }

    if(email.indexOf ("@") ==-1  || email.length <6){
        text = "please enter valid email";
        error_message.innerHtml = text;
        return false;
    }

    if (message.length <= 166){
        text = "please enter more text";
        error_message.innerHtml = text;
        return false;  
    }


alert ("Form submitted sucsessfully")
return true;



}