// an array with all of our cart items

var source  = $("#shopping-template").html();
var template = Handlebars.compile(source);
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
var total = 0;
  $('.cart-list').empty()

  for(i = 0; i < cart.length; i++){
    total += cart[i].price
    var html = template(cart[i]);
    $(".cart-list").append(html)
    
  } 
  $('.total').html(total)
}




var addItem = function (item, price) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push({
    item : item,
    price : price
  })
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart.length = 0
  $('.cart-list').empty()
  $('.total').html(0)
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  if($('.shopping-cart').css('display') == 'none'){
  $('.shopping-cart').addClass("show")
  } else{
    $('.shopping-cart').removeClass('show')
}
 });

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data().name
  var price = $(this).closest('.item').data().price
  
  
  
  addItem(item, price);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
