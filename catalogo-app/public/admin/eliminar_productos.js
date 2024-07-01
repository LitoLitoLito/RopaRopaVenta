document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const deleteProductModal = new bootstrap.Modal(document.getElementById('deleteProductModal'));
    const confirmDeleteButton = document.getElementById('confirmDeleteButton');
    let currentProductId;

    // Función para obtener y mostrar los productos
    async function fetchProducts() {
        try {
            const response = await fetch('/api/productos');
            const products = await response.json();

            productList.innerHTML = '';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="card">
                        <div>
                            <img src="${product.imagen_principal}" class="card-img-top" alt="${product.titulo}" style="width: 200px; height: 300px;">
                            <img src="${product.imagen_secundaria}" class="img-fluid" alt="Imagen Secundaria" style="width: 200px; height: 300px;">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.titulo}</h5>
                            <p class="card-text">${product.descripcion}</p>
                            <p class="card-text"><strong>Precio:</strong> $${product.precio}</p>
                            <p class="card-text"><strong>Disponible:</strong> ${product.disponible ? 'Sí' : 'No'}</p>
                            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteProductModal" data-id="${product.id_productos}">Eliminar</button>
                        </div>
                    </div>
                `;
                productList.appendChild(productCard);

                // Añadir eventos para los botones de eliminar
                productCard.querySelector('[data-bs-target="#deleteProductModal"]').addEventListener('click', event => {
                    currentProductId = event.target.getAttribute('data-id');
                });
            });
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    }

    // Evento para confirmar la eliminación del producto
    confirmDeleteButton.addEventListener('click', async () => {
        try {
            const response = await fetch(`/api/productos/${currentProductId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Producto eliminado exitosamente');
                fetchProducts();
                deleteProductModal.hide();
            } else {
                alert('Error al eliminar el producto');
            }
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    });

    // Inicializar la lista de productos al cargar la página
    fetchProducts();
});
