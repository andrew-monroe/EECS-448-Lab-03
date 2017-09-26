function validatePassword() {
  var password = document.forms["passwordValidator"]["password"].value;
  var confirmPassword = document.forms["passwordValidator"]["confirmPassword"].value;

  if (password.length < 8 || confirmPassword.length < 8) {
    alert("Passwords must be at least 8 characters long.");
    return false;
  } else if (password != confirmPassword) {
    alert("Passwords must match.");
    return false;
  } else {
    alert("Nice passwords.");
    return true;
  }
}