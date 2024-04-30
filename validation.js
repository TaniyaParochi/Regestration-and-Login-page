function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var isValid = true;

    // Username validation
    if (username.trim() === "") {
        document.getElementById("usernameError").innerHTML = "Username is required";
        isValid = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    return isValid;
}
