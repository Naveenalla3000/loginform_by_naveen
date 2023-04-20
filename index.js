let username = document.getElementById("idname")
let phno = document.getElementById('idphonenumber')
let gen = document.getElementById("gender")
let add = document.getElementById("gender")
let pass = document.getElementById("idpassword")
let repass = document.getElementById("repassword")

submit=()=>{
    if(username==''||username==' ')
    alert("Please Enter the valid username")
    else if(pass != repass)
    alert("same password should enter")
}