let signinData = JSON.parse(localStorage.getItem("user-data")) || [];

let userId = document.getElementById("user-id");
let userPass = document.getElementById("user-pass");
let logIn = document.getElementById("log");

let loggedinData = JSON.parse(localStorage.getItem("logged-data")) || [];

let flag=false;
logIn.addEventListener("click",function(){
    for(let i=0;i<signinData.length;i++){
        if(userId.value === signinData[i].name && userPass.value === signinData[i].Password){
            flag=true;
            loggedinData.push(signinData[i], {flag:true});
            localStorage.setItem("logged-data",JSON.stringify(loggedinData))
            alert("Succesfully Logged In");
            window.location.href = "index.html"
            break;
        }
    }
    if(flag == false){
        alert("Wrong Credentials");
    }
})

