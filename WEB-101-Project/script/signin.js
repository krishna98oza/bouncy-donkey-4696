let signbody = document.getElementById("sign-in");

let myname = document.getElementById("myname");
let mynumber = document.getElementById("mynumber");
let mydate = document.getElementById("birthdate");
let password = document.getElementById("pass");
let signbtn = document.getElementById("sign");

let signinData = JSON.parse(localStorage.getItem("user-data")) || [];

signbtn.addEventListener("click",function(){
    let data = {
        name : myname.value,
        number : mynumber.value,
        birthDate : mydate.value,
        Password : password.value,
    }
    signinData.push(data);
    localStorage.setItem("user-data",JSON.stringify(signinData));
})
