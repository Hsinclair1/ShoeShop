function Register() {
    //console.log("t")
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const phone = document.getElementById("phone").value;
    //console.log(name, email, password1, phone);

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("matchError").innerHTML = "";

    if (name === "" || phone === "" || email === "" || password1 === "") {

        if (name === "") {
            document.getElementById("nameError").innerHTML = "You must have a valid name";
        }
        if (phone === "") {
            document.getElementById("phoneError").innerHTML = "You must have a valid number";
        }
        if (email === "") {}
        if (password1 === "") {
            document.getElementById("passwordError").innerHTML = "You must have a valid password";
        }
        if (password1 != "" && password1 != password2) {
            document.getElementById("matchError").innerHTML = "Passwords must match";
        }


    } else {
        var user = {
            name: name,
            email: email,
            password: password1,
            phone: phone
        }
        localStorage.setItem("userInfo", JSON.stringify(user));
        window.location.href = "account.html";
    }















}