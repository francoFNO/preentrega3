let cart = [];

//Función para agregar un producto al carrito

function addToCart(btn){
  // Recupera los detalles del producto desde el atributo data-product
  let product = btn.getAttribute("data-product");

  // Busca el producto en la tabla y recupera su nombre y precio
  let productRow = btn.parentNode.parentNode;
  let productName = productRow.cells[0].innerHTML;
  let productPrice = productRow.cells[2].innerHTML;

  // Crea un objeto para representar el producto en el carrito
  let cartItem = {
    name: productName,
    price: productPrice,
    
  };

  // Agrega el producto al carrito
  cart.push(cartItem);

  // Guarda el carrito en el almacenamiento local del navegador
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Función para mostrar el contenido del carrito
function showCart() {
  // Recupera el carrito del almacenamiento local del navegador
  cart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  // Crea una tabla para mostrar los productos en el carrito

let cartTable = "<table><tr><th>Nombre</th><th></th><th>Precio</th></tr>";

  // Recorre el carrito y agrega una fila a la tabla por cada producto
  for (var i = 0; i < cart.length; i++) {
    cartTable += "<tr><td>" + cart[i].name + "</td><td>" + cart[i].price + "</td></tr>";
    total += parseFloat(cart[i].price.replace("$", ""));
  }
  cartTable += "<tr><td>Total</td><td>" + "$" + total + "</td></tr></table>";


  // Muestra la tabla en el div con id "carrito"
  document.getElementById("carrito").innerHTML = cartTable;
  
}
function buy() {
  alert("Compra realizada con éxito!");
  localStorage.removeItem("cart");
  document.getElementById("carrito").innerHTML = "";
}

function emptyCart() {
  localStorage.removeItem("cart");
  document.getElementById("carrito").innerHTML = "";
}