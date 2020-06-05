var attempt = 3;
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "ashwin" && password == "ashwin#123") {
        alert("Login successful! You will be redirected to my home page");
        window.location = "home.html";
        return false;
    }
    else {
        attempt--;
        alert("You have left " + attempt + " more attempts left"+"\nFor testing, use the below credentials\nUsername: ashwin\nPassword: ashwin#123");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}