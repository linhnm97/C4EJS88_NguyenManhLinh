const mainform = document.getElementById("main-form");
mainform.onsubmit = function(event) {
    event.preventDefault();
    console.log("hello world");
    let email =mainform.email.value;
    let password = mainform.password.value;
    if(!email){
        document.getElementById("error").innerHTML = "Invalid email";
    } else if (!password) {
        document.getElementById("error").innerHTML = "Invalid passwordl";
    }  else {
        document.getElementById("error").innerHTML = "";
        alert ("Log in successfully");
    }
}
