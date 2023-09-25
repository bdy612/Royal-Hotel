function log(){
    var user=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    localStorage.setItem("user",user)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    window.location.href="index1.html"
}