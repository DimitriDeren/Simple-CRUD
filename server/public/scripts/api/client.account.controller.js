/* when log in form is submitted */
function submitLogin() {
    let userName = document.getElementById('loginUser').value;
    let password = document.getElementById('loginPwd').value;
    authenticationCall(userName, password);
}

function submitReg() {
    let userName = document.getElementById('registerUser').value;
    let password = document.getElementById('registerPwd').value;

    registrationCall(userName, password);
}

/* Passes username & password to server for authentication */
function authenticationCall(userName, password) {
    console.log("Attempt to authenticate");
    console.log("username: " + userName);
    console.log("password: " + password);
    console.log("--------------------------");
    getAuthenticationRequest(userName, password);
}

function registrationCall(userName, password) {
    console.log("Attempt to create user");
    console.log("username: " + userName);
    console.log("password: " + password);
    console.log("--------------------------");
    postNewRegistration(userName, password);

}

//API CALLS TO ACCOUNTS

async function getAuthenticationRequest(userName, password) {
    let url = CONFIG.ACCOUNTS_ACCESS_POINT;
    url = url.concat("?userName=", userName, "&passHash=", password);
    // let data = {
    //     userName: userName,
    //     passHash: password
    // }

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
    });

    const authentication = await response.json();

    if (user != "" && user != null) {
        setCookie("username", user, 365);
    }

    console.log(authentication);


    return authentication;
}

async function postNewRegistration(userName, password) {
    let url = CONFIG.ACCOUNTS_ACCESS_POINT;
    let data = {
        userName: userName,
        passHash: password,
    }

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        method: "POST"
    });

    console.log(response.status);
    //return response.status;
}