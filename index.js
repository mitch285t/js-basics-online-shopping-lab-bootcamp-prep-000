var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code herev
var price = Math.ceil(Math.random()*100)
cart.push({[item]: price})
console.log(item+` has been added to your cart.`)
return cart
  
}
   
function viewCart() {
  // write your code here
if (cart.length ===0){
  console.log('Your shopping cart is empty.')
}
 var newcart =[];
 for (var i = 0;i<cart.length; i++){
   var key = object.key(car[i])[0]
   newcart.push(key+" at $"+cart[i][key])
 }
 
}

function total() {
  // write your code here

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
var cart = [];