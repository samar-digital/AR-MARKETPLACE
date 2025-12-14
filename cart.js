// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(productId, size) {
    const p = products.find(x => x.id == productId);

    const item = {
        id: p.id,
        name: p.name,
        price: p.price,
        size: size,
        image: p.image
    };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}

// UPDATE CART COUNT (Navbar)
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) count.textContent = cart.length;
}

updateCartCount();
