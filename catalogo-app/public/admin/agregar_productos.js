document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('addProductForm');

    addProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(addProductForm);
        const productData = {
            categoria: formData.get('categoria'),
            titulo: formData.get('titulo'),
            descripcion: formData.get('descripcion'),
            precio: parseFloat(formData.get('precio')),
            imagen_principal: formData.get('imagen_principal'),
            imagen_secundaria: formData.get('imagen_secundaria'),
            disponible: formData.get('disponible') === '1',
        };

        try {
            const response = await fetch('/api/productos1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                alert('Producto agregado exitosamente');
                addProductForm.reset();
            } else {
                alert('Error al agregar el producto');
            }
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    });
});
