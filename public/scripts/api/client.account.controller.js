/* when logout button is submitted, cookies are cleared from the root path */
function submitLogout() {
    document.cookie = "username=; expires=Saturday, 01 Jan 2000 00:00:00 UTC; path=/";
    signOut();
    window.location.href ="/client/login_page";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }

/* when log in form is submitted */
function submitLogin() {
    let userName = document.getElementById('loginUser').value;
    let password = document.getElementById('loginPwd').value;
    authenticationCall(userName, password);
}

/* when registration form is submitted */
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

/* Passes username & password to server *through post request */
function registrationCall(userName, password) {
    console.log("Attempt to create user");
    console.log("username: " + userName);
    console.log("password: " + password);
    console.log("--------------------------");
    postNewRegistration(userName, password);
}

// API CALLS TO ACCOUNTS

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

    if (authentication.Authenticated) {
        setCookie("username", userName, 30);
        window.location.href ="/client/account_page";
    }
    console.log(authentication.Authenticated);

    return authentication;
}

async function postNewRegistration(userName, password) {
    let url = CONFIG.ACCOUNTS_ACCESS_POINT;
    let data = {
        userName: userName,
        password: password,
    }

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        method: "POST"
    });

    if (response.status == 200) {
        window.location.href ="/client/login_page";
    } else {
        alert("There was a problem creating your account.\nPlease try again.");
    }

    console.log(response.status);
}

function loginCookieCheck() {
    if (checkCookie()) {
        window.location.href ="/client/account_page";
    }
}

function addRecipeCookieCheck() {
    if (!checkCookie()) {
        window.location.href ="/client/guest_dashboard";
        alert("You need to be logged in to access this page")
    }
}

function dashboardCookieCheck() {
    if (!checkCookie()) {
        window.location.href ="/client/guest_dashboard";
    }
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        return true;
    } else {
        return false;
    }
}

/* creates a new cookie */
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    console.log(cname);
    console.log(cvalue);
    console.log(expires);
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* returns the cookie associated with user */
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Google sign in
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);

    setCookie("username", profile.getName(), 30);
  }

