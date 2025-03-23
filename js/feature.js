function updateCartDisplay(){
    const cartList = document.getElementaryId('cart');
    cartList.innerHTML = '';
for (let product in cart) {
    const listItem = document.createElement('li');
    listItem.innerText = `${product};
                        -Quantity: ${cart[product].quantity}
                        -Total Price:
                        Php${cart[product].totalPrice.toFixed(2)}`;
    cartList.appendChild(listItem);
}
function addToCart(product_name, product_price) {
    if (cart[product_name])
        cart[product_name].quantity += 1;
        cart[product_name].totalPrice += product_price;
    }  {
        cart[product_name] = {
            quantity: 1,
            totalPrice: product_price
        };
}
}
