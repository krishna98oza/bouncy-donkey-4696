let signinData = JSON.parse(localStorage.getItem("user-data")) || [];

let userId = document.getElementById("user-id");
let userPass = document.getElementById("user-pass");
let logIn = document.getElementById("log");

let loggedinData = JSON.perse(localStorage.getItem(logged-data)) || [];

let flag=false;
for(let i=0;i<signinData.length;i++){
    if(userId.value === signinData[i].name && userPass.value === signinData[i].Password){
        flag=true;
        alert("Succesfully Logged In");
        loggedinData.push(signinData[i], {flag:true});
        localStorage.setItem("logged-data",JSON.stringify(loggedinData))
        break;
    }
}
if(flag != true){
    alert("Wrong Credentials");
}