let arr1 = [
    "https://images.dailyobjects.com/marche/assets/images/other/deals-of-the-day-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1",
    "https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1",
    "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-desktop-up.jpg?tr=cm-pad_crop,v-2,dpr-1",
    "https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1",
    "https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1"
]

let image = document.getElementById("img-mid3");
let counter = 0;

image.setAttribute("src",arr1[counter])
setInterval(function (){
    counter++;
    if(counter == arr1.length){
        counter = 0;
    }
    image.setAttribute("src",arr1[counter])
},3000)

// let cartLogo = document.getElementById("cartLogo");
// cartLogo.addEventListener("click",function(){
//     window.location.href = "buy.html"
// })

// let top = document.querySelector("#top>img");
top.addEventListener("click",function(){
    window.location.href = "products.html"
})
