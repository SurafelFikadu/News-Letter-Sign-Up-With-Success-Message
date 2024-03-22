const btnSuccess = document.getElementById("btn-success");
const btnMain = document.getElementById("btn-main");
const main = document.getElementById("main");
const success = document.getElementById("success"); 
const email = document.getElementById("email");
const strongEmail = document.getElementById("strong-email");
const correct = document.getElementById("correct");

const emailValid = new RegExp('^.+@+.+\.+[a-z]+$')
// const emailValid = /^[A-Za-z0-9]*[@][A-Za-z]*[\.][a-z]{2, 4}$/

const displaySuccess = () => {
    if(emailValid.test(email.value)) {
        success.style.display = "block";
        main.style.display = "none";
        strongEmail.textContent = email.value;
    }
    if(email.value == "") {
        correct.style.display = "block";
        correct.textContent = "Email Address is required";
        correct.style.color = "red";
    }
    else {
        correct.style.display = "block";
        correct.textContent = "Invaild Email Address";
        correct.style.color = "red";
    }
}

const displayMain = () => {
    main.style.display = "flex";
    success.style.display = "none";
    correct.style.display = "none";
    email.value = "";
}

btnMain.addEventListener("click", displaySuccess);
btnSuccess.addEventListener("click", displayMain);

//.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2, 4}$/)