/* User login page
    Author Johanah Gloria 
    300466914 --> */

// Toggles the password to show or hide the input from user *This doesn't work
function togglePasswordRegister() {
    var x = document.getElementById("registerPwd");
    if (x.type === "password" && x.type !== null) {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function togglePasswordLogin() {
   var y = document.getElementById("loginPwd");
    if (y.type === "password" && y.type !== null) {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }