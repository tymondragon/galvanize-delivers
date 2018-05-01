
$(document).ready(function() {

  M.AutoInit();
  $('.sidenav').sidenav();
  let subTotal = $("#subtotal").text()
  let subNumber = 0
  let menu = {
    burger: 8.99,
    arugula: 11.99,
    swine: 14.99,
    ice_cream: 7.99,
  }
  ///////////////////////Royale With Cheese/////////////
  let burgerCard = $("#burger").click(function() {
    let itemPrice = menu["burger"]
    event.preventDefault();
    let row = $("<tr></tr>")
    let burg = $("<td id='royale'>Royale With Cheese</td>")
    let burgPrice = $("<td id='burgPrice' class='right-align'>$8.99</td>")
    $("#order").append(row, burg, burgPrice)
    subNumber += itemPrice
    return total(subNumber)
  })
  /////////////////Arugula Pie///////////////////////
  let arugulaCard = $("#arugula").click(function() {
    let itemPrice = menu["arugula"]
    event.preventDefault();
    let row = $("<tr></tr>")
    let pie = $("<td id='pie'>Arugula Pie</td>")
    let arugPrice = $("<td id='arugPrice' class='right-align'>$11.99</td>")
    $("#order").append(row, pie, arugPrice)
    subNumber += itemPrice
    return total(subNumber)
  })
  ////////SMoked Swine////////////////////////////
  let swineCard = $("#swine").click(function() {
    let itemPrice = menu["swine"]
    event.preventDefault();
    let row = $("<tr></tr>")
    let swine = $("<td id='royale'>Smoked Swine</td>")
    let swinePrice = $("<td id='swinePrice' class='right-align'>$14.99</td>")
    $("#order").append(row, swine, swinePrice)
    subNumber += itemPrice
    return total(subNumber)
  })
  //////////////////Ice Cream Biscuit//////////////////
  let iceCreamcard = $("#ice-cream").click(function() {
    let itemPrice = menu["ice_cream"]
    event.preventDefault();
    let row = $("<tr></tr>")
    let ice_cream = $("<td id='cream'>Ice Cream Biscuit</td>")
    let creamPrice = $("<td id='creamPrice' class='right-align'>$7.99</td>")
    $("#order").append(row, ice_cream, creamPrice)
    subNumber += itemPrice
    return total(subNumber)
  })
  let total = function(subNumber) {
    let tax = subNumber * .08845
    let total = tax + subNumber
  $("#subtotal").empty()
  $("#subtotal").append(subNumber.toFixed(2))
  $("#tax").empty()
  $("#tax").append(tax.toFixed(2))
  $("#total").empty()
  $("#total").append(total.toFixed(2))
}
$("#placeOrder").click(function() {
  if($("#total").text() === "0"){
    console.log("yes")
    M.toast({html: 'Please add food before placing an order'})
  }
  else {
    M.toast({html: 'Order Placed'})
  }
})
});
