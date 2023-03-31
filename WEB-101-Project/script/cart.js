
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
        
        let remove = document.createElement("button");
        remove.innerText = "Remove"

        remove.addEventListener("click",function(){
           cartData = cartData.filter(function (element){
            return element.prodId !== ele.prodId
           });
           localStorage.setItem("cart-remove",JSON.stringify(cartData))
           DisplayProduct()
        })

        let buyNow = document.createElement("button");
        buyNow.innerText = "Buy Now"

        card.append(image,name,category,price,remove,buyNow)
        container.append(card);
    })
    let total = document.getElementById("cart-total");

      let sum = 0;
      for(let i=0;i<cartData.length;i++){
        sum += cartData[i].price;
      }
      total.innerText = sum;
}
DisplayProduct(cartData);