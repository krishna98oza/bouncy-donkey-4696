let signinData = JSON.parse(localStorage.getItem("user-data")) || [];


let logIn = document.getElementById("log");



console.log(signinData)
logIn.addEventListener("click",function(){
    alert("Succesfully Logged In");
})

