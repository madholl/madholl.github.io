window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        var validateForm = checkSubmit();
        if (validateForm == true)  {
            messageSent();
            emailjs.sendForm('service_2ekyy5z', 'template_dwf6fpk', this)
            .then(function() {
                var form = document.getElementById('contact-form');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
            });

        }
        else {
            messageRejected();
        }
    });
}

function checkFirstName() {
    if(document.getElementById("user_fname").value.length == 0)
    {
        console.log("first name invalid")
        document.getElementById("user_fname").style ="outline: 2px solid red";
        return false;
    }
    else {
        document.getElementById("user_fname").style ="outline: 0";
        console.log("valid");
        return true;
    }
}

function checkLastName() {
    if(document.getElementById("user_lname").value.length == 0)
    {
        console.log("last name invalid")
        document.getElementById("user_lname").style ="outline: 2px solid red";
        return false;
    }
    else {
        console.log("valid");
        document.getElementById("user_lname").style ="outline: 0";
        return true;
    }
}

function checkEmail() {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailFormat.test(document.getElementById("user_email").value) == false) 
    {
        console.log("email invalid")
        document.getElementById("user_email").style ="outline: 2px solid red";
        return false;
    }
    else {
        console.log("valid");
        document.getElementById("user_email").style ="outline: 0";
        return true;
    }
}

function checkPhoneNumber() {
    var phoneFormat = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    if(phoneFormat.test(document.getElementById("user_phone").value) == false) 
    {
        console.log("phone invalid")
        document.getElementById("user_phone").style ="outline: 2px solid red";
        return false;
    }
    else {
        console.log("valid");
        document.getElementById("user_phone").style ="outline: 0";
        return true;
    }
}

function checkMessage() {
    if(document.getElementById("user_message").value.length == 0)
    {
        console.log("message invalid")
        document.getElementById("user_message").style ="outline: 2px solid red";
        return false;
    }
    else {
        document.getElementById("user_message").style ="outline: 0";
        return true;
    }
}

function checkSubmit() {
    return (checkFirstName() & checkLastName() & checkEmail() & checkPhoneNumber() & checkMessage())
}

function messageSent() {
    let closeBtnSuccess = document.getElementById("close-btn-success")
    let modalSuccess = document.getElementById("modal-success");
    modalSuccess.style.display = "block";
    closeBtnSuccess.onclick = function(){
        modalSuccess.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modelSuccess){
          modalSuccess.style.display = "none"
        }
    }
}

function messageRejected() {
    let closeBtnError = document.getElementById("close-btn-error")
    let modalError = document.getElementById("modal-error");
    modalError.style.display = "block";
    closeBtnError.onclick = function(){
        modalError.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modalError){
          modalError.style.display = "none"
        }
    }
    
}