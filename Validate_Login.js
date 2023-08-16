
var users = {
    "caoyue": "123",
   
}

//hasOwnProperty is used to check if a given property name exist 
function loginUser() {
    // Get the input values
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;
    var nricInput = document.getElementById("nric").value;
    var username = document.getElementsByName("uname")[0].value;
    var patternNric = /^[TSGF][0-9]{7}[A-Z]$/;
    // Check if the username and password are valid
    if (! (users.hasOwnProperty(username) && users[username] == password)) {
        // Invalid credentials, show an error message
        document.getElementById("error-msg").textContent = "Invalid username or password.";
        return false;
    }
    if (!patternNric.test(nricInput)) {
        document.getElementById("error-msg").textContent = "Invalid Nric";
        return false;
    }
    alert("Login successful for user: " + username);
    return true;
}
