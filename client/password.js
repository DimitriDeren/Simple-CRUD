/* User login page
    Author Johanah Gloria 
    300466914 --> */

// Toggles the password to show or hide the input from user *This doesn't work
function togglePassword() {
    var x = document.getElementById("loginPwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }