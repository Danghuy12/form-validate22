const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = "Please fill correct information"
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        // break statement 
        return;
    }
    //check password match
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    } else {
        passwordMatch = false;
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        message.textContent = "pass not match"
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        return;
    }
    // if form is valid and password match
    if (isValid && passwordMatch) {
        message.textContent = "Sucessful"
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'
    }
}

// store data
function storeData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user)
}

function processFormData(e) {
    e.preventDefault();
    console.log(e);
    //validate form
    validateForm();
    storeData()
}


//event
form.addEventListener('submit', processFormData);
