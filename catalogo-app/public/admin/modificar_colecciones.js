document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const editProductModal = new bootstrap.Modal(document.getElementById('editProductModal'));
    const editProductForm = document.getElementById('editProductForm');

    // Función para obtener y mostrar los productos
    async function fetchProducts() {
        try {
            const response = await fetch('/api/colecciones1');
            const products = await response.json();

            productList.innerHTML = '';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="card">
                    <div>
                    <img src="${product.imagen_principal}" class="card-img-top" alt="${product.titulo}" style="width: 200px; height: 300px;">
                        <img src="${product.imagen_secundaria}" class="img-fluid" alt="Imagen Secundaria" style="width: 200px; height: 300px;>
                    </div>    
                    
                        <div class="card-body">
                            <h5 class="card-title">${product.titulo}</h5>
                            <p class="card-text">${product.descripcion}</p>
                            <p class="card-text"><strong>Precio:</strong> $${product.precio}</p>
                            <p class="card-text"><strong>Disponible:</strong> ${product.disponible ? 'Sí' : 'No'}</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProductModal" data-id="${product.id_colecciones}">Editar</button>
                        </div>
                    </div>
                `;
                productList.appendChild(productCard);

                // Añadir eventos para los botones de editar
                productCard.querySelector('[data-bs-target="#editProductModal"]').addEventListener('click', event => {
                    const productId = event.target.getAttribute('data-id');
                    loadProductDetails(productId);
                });
            });
        } catch (error) {
            console.error('Error al obtener las colecciones:', error);
        }
    }

    // Función para cargar los detalles del producto en el formulario de edición
    async function loadProductDetails(productId) {
        try {
            const response = await fetch(`/api/colecciones1/${productId}`);
            const product = await response.json();

            document.getElementById('editProductId').value = product.id_colecciones;
            document.getElementById('editCategoria').value = product.categoria;
            document.getElementById('editTitulo').value = product.titulo;
            document.getElementById('editDescripcion').value = product.descripcion;
            document.getElementById('editPrecio').value = product.precio;
            document.getElementById('editImagenPrincipal').value = product.imagen_principal;
            document.getElementById('editImagenSecundaria').value = product.imagen_secundaria;
            document.getElementById('editDisponible').value = product.disponible ? '1' : '0';

            editProductModal.show();
        } catch (error) {
            console.error('Error al cargar los detalles de coleccion:', error);
        }
    }

    // Evento para enviar el formulario de edición
    editProductForm.addEventListener('submit', async event => {
        event.preventDefault();

        const formData = new FormData(editProductForm);
        const productId = formData.get('id_colecciones');

        try {
            const response = await fetch(`/api/colecciones1/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (response.ok) {
                alert('Producto de Colección actualizado exitosamente');
                fetchProducts();
                editProductModal.hide();
            } else {
                alert('Error al actualizar el producto de colección');
            }
        } catch (error) {
            console.error('Error al actualizar el producto de coleccion:', error);
        }
    });

    // Inicializar la lista de productos al cargar la página
    fetchProducts();
});
