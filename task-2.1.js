function clearErrors() {
    let errors = document.getElementsByClassName("ferror");
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName("ferror")[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearErrors();

    // Validate First Name
    let firstname = document.forms['signupForm']["firstname"].value;
    if (firstname.length === 0) {
        seterror("firstname", "*This field is required");
        returnval = false;
    }

    // Validate Last Name
    let lastname = document.forms['signupForm']["lastname"].value;
    if (lastname.length === 0) {
        seterror("lastname", "*This field is required");
        returnval = false;
    }

    // Validate Email
    let email = document.forms['signupForm']["email"].value;
    if (email.length === 0) {
        seterror("email", "*Please enter a valid email (max 25 characters)");
        returnval = false;
    }

    // Validate Password
    let password = document.forms['signupForm']["password"].value;
    let lowercase = /[a-z]/g;
    let uppercase = /[A-Z]/g;
    let number = /[0-9]/g;
    
    if (password.length < 8 || !password.match(lowercase) || !password.match(uppercase) || !password.match(number)) {
        seterror("password", "*Password must be at least 8 characters and include uppercase, lowercase, number, and special character");
        returnval = false;
    }

    // Validate Phone
    let phone = document.forms['signupForm']["phone"].value;
    if (phone.length === 0) {
        seterror("phone", "*This field is required");
        returnval = false;
    } else if (phone.length !== 10) {
        seterror("phone", "*Invalid phone number");
        returnval = false;
    }
    
    return returnval;
}
