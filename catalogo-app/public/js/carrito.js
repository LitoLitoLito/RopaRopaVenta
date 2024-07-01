// carrito.js

let cart = [];

function addToCart(product) {
    // Convertir el precio a número decimal si es necesario
    const precioNumerico = parseFloat(product.precio);
    if (!isNaN(precioNumerico)) {
        product.precio = precioNumerico; // Actualizar el precio en el objeto product
        cart.push(product);
        alert("Producto agregado al carrito!");
        updateCartIcon();
    } else {
        console.error('El precio del producto no es un número válido:', product.precio);
        // Manejar el caso donde el precio no es válido
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
        // Usar parseFloat para asegurar que el precio sea numérico
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
    const total = cart.reduce((sum, product) => sum + product.precio, 0);
    document.getElementById("cart-total").textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
    updateCartIcon();
}

function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("¡Gracias por su compra!");
        cart = [];
        showCart();
        updateCartIcon();
    }
}

document.getElementById("cart-button").addEventListener("click", () => {
    showCart();
    new bootstrap.Modal(document.getElementById('cart-modal')).show();
});

document.getElementById("checkout-button").addEventListener("click", checkout);
