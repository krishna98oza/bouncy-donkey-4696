
let cartData = JSON.parse(localStorage.getItem("cart-data")) || []
console.log(cartData)
let container = document.getElementById("container");

function DisplayProduct(data){
    container.innerHTML = ""
    cartData.forEach(function(ele){
        let card = document.createElement("div");
        
        let image = document.createElement("img");
        image.setAttribute("src",ele.img);

        let name = document.createElement("h2");
        name.innerText = ele.title;

        let category = document.createElement("h5");
        category.innerText = ele.category

        let price = document.createElement("h2");
        price.innerText = ele.price;

        let decreament = document.createElement("button");
        let increament = document.createElement("button");
        let newquantity = document.createElement("span");
        
        let remove = document.createElement("button");
        remove.innerText = "Remove"

        let count = 1
        increament.innerText = "+"
        decreament.innerText = "-"
        newquantity.innerText = ele.quantity
        // console.log(typeof(newquantity.innerText))

        remove.addEventListener("click",function(){
           cartData = cartData.filter(function (element){
            return element.prodId !== ele.prodId
           });
           localStorage.setItem("cart-data",JSON.stringify(cartData))
           DisplayProduct(cartData)
        })

        let buyNow = document.createElement("button");
        buyNow.innerText = "Buy Now"

        buyNow.addEventListener("click",function(){
          window.location.href = "buy.html"
        })
        
        increament.addEventListener("click",function(){
          
          ele.quantity++
           localStorage.setItem("cart-data",JSON.stringify(cartData))
           DisplayProduct(cartData)
          })
        decreament.addEventListener("click",function(){
          if(ele.quantity > 1){
            ele.quantity--;
            localStorage.setItem("cart-data",JSON.stringify(cartData))
            DisplayProduct(cartData)
          }
        })

        card.append(image,name,category,price,increament,newquantity,decreament,remove,buyNow)
        container.append(card);
    })
    let total = document.getElementById("cart-total");

      let sum = 0;
      for(let i=0;i<cartData.length;i++){
        sum += cartData[i].price * cartData[i].quantity
      }
      total.innerText = sum;
}
DisplayProduct(cartData);