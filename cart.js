function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cartItems");

    if (cart.length === 0) {
        container.innerHTML = "<h3>Your cart is empty</h3>";
        return;
    }

    container.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>Price: ₹${item.price}</p>
                    
                    <div class="qty-box">
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)">+</button>
                    </div>

                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("subtotal").innerText = "Subtotal: ₹" + subtotal;
    document.getElementById("delivery").innerText = "Delivery: ₹50";
    document.getElementById("total").innerText = "Total: ₹" + (subtotal + 50);
}

function changeQty(index, value) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].qty += value;

    if (cart[index].qty <= 0) cart[index].qty = 1;

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    window.location.href = "checkout.html";
}

loadCart();
