let cart = [];

function addToCart(product) {
    const precioNumerico = parseFloat(product.precio);
    if (!isNaN(precioNumerico)) {
        product.precio = precioNumerico;
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart)); // Guardar carrito en localStorage
        alert("Producto agregado al carrito!");
        updateCartIcon();
    } else {
        console.error('El precio del producto no es un número válido:', product.precio);
        alert('Error: El precio del producto no es un número válido.');
    }
}

function updateCartIcon() {
    const cartButton = document.getElementById("cart-button");
    cartButton.innerHTML = `<i class="bi bi-cart4"></i> (${cart.length})`;
}

function showCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    cart.forEach((product, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        const precioNumerico = parseFloat(product.precio);
        listItem.innerHTML = `
            ${product.titulo} - $${precioNumerico.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(listItem);
    });

    updateCartTotal();
}

function updateCartTotal() {
    const total = cart.reduce((sum, product) => sum + parseFloat(product.precio), 0);
    document.getElementById("cart-total").textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar carrito en localStorage
    showCart();
    updateCartIcon();
}

function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("¡Gracias por su compra!");
        cart = [];
        localStorage.removeItem('cart'); // Eliminar carrito de localStorage
        showCart();
        updateCartIcon();
    }
}

document.getElementById("cart-button").addEventListener("click", () => {
    showCart();
    new bootstrap.Modal(document.getElementById('cart-modal')).show();
});

document.getElementById("checkout-button").addEventListener("click", checkout);

document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartIcon();
    }
});
