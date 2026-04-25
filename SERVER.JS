const tudo = document.querySelectorAll('.principal')
const buttonBuy = document.getElementById("cart-carro")
const car = document.getElementById("carrinho")
const buttonfechar = document.getElementById("button-fechar")

console.log(tudo)

buttonBuy.addEventListener("click", function(){
car.style.display ="flex"

}) 

car.addEventListener("click", function(event){
if(event.target == car){car.style.display = "none"}

})


buttonfechar.addEventListener("click", function(){
car.style.display = "none"
})

