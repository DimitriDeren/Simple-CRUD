window.addEventListener('load', bindEvents);

/* adds even listener to button */
function bindEvents() {
    document.querySelector('#loginSubmit').addEventListener('click', submit);
}

/* when log in form is submitted */
function submit() {
    var password = document.getElementById('loginPwd').value;
    console.log(password);
    hashPassword(password);
}

/* hash password input - need to add crypto library */
function hashPassword(password) {
    const hashedPassword = CryptoJS.SHA256(password);
    console.log(hashedPassword);
}