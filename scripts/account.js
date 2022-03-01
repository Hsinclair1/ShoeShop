document.addEventListener("DOMContentLoaded", function() {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    document.getElementById("welcomeUser").innerHTML = `Welcome back ${userInfo.name}`;
    document.getElementById("email").innerHTML = `<b>Email:</b> ${userInfo.email}`;
    document.getElementById("phone").innerHTML = `<b>Phone:</b> ${userInfo.phone}`;

})

function Logout() {
    localStorage.removeItem("userInfo");
    window.location.href = "index.html";
    alert("you have logged out!!")
}