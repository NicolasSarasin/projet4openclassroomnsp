function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // variable du premier modal
const modalBtn = document.querySelectorAll(".modal-btn"); // variable des boutons modaux
const modalbg2 = document.querySelector(".bground2"); // variable du second modal
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close"); // variable des boutons de fermeture 1
const closeBtn2 = document.querySelector(".btn-close"); // variable du bouton de fermeture 2

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeBtn2.addEventListener("click", closeModal2);

// launch modal form
function launchModal() {
    //Fontion du lancement des modaux
    closeModal();
    modalbg.style.display = "block";
}
function launchModal2() {
    //2eme fontion du lancement des modaux
    closeModal();
    modalbg2.style.display = "block";
}
function closeModal() {
    modalbg.style.display = "";
    modalbg2.style.display = "";
}
function closeModal2() {
    modalbg2.style.display = "";
}
function validate() {
    //fonction qui retourne les valeurs du formulaire du site web
    document.getElementById("firstNameError").style.display = "none";
    document.getElementById("lastNameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("birthdateError").style.display = "none";
    document.getElementById("quantityError").style.display = "none";
    document.getElementById("locationError").style.display = "none";
    document.getElementById("checkError").style.display = "none";

    let form = document.forms["reserve"];
    let hasError = false;
    let firstName = form.first.value;
    if (firstName.length < 2) {
        hasError = true;
        document.getElementById("firstNameError").style.display = "block";
    }
    let lastName = form.last.value;
    if (lastName.length < 2) {
        hasError = true;
        document.getElementById("lastNameError").style.display = "block";
    }
    let email = form.email.value;
    if (email.length < 2 || email == false) {
        hasError = true;
        document.getElementById("emailError").style.display = "block";
    }
    let birthdate = form.birthdate.value;
    if (birthdate == "") {
        hasError = true;
        document.getElementById("birthdateError").style.display = "block";
    }
    let quantity = parseInt(form.quantity.value);
    if (isNaN(quantity)) {
        hasError = true;
        document.getElementById("quantityError").style.display = "block";
    } else if (quantity < 0 || quantity > 99) {
        hasError = true;
        document.getElementById("quantityError").style.display = "block";
    }
    let localisation = form.location.value;
    if (!localisation) {
        hasError = true;
        document.getElementById("locationError").style.display = "block";
    }
    let Checkbox = form.checkbox1.value;
    if (Checkbox != Checkbox) {
        hasError = true;
        document.getElementById("checkError").style.display = "block";
    }
    if (!hasError) {
        launchModal2();
    }
    return false;
}
