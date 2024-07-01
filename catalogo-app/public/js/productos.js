document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productos-container');

            // Agrupar productos por categoría
            const productosPorCategoria = data.reduce((acc, producto) => {
                if (!producto.disponible) return acc;  // Ignorar productos no disponibles

                const categoria = producto.categoria;
                if (!acc[categoria]) {
                    acc[categoria] = [];
                }
                acc[categoria].push(producto);
                return acc;
            }, {});

            // Crear menús y productos para cada categoría
            for (const [categoria, productos] of Object.entries(productosPorCategoria)) {
                // Crear un h1 para la categoría
                const categoriaH1 = document.createElement('h1');
                categoriaH1.textContent = categoria;
                categoriaH1.className = 'categoria-separador';
                categoriaH1.id = categoria; // Asignar ID
                container.appendChild(categoriaH1);

                // Crear menú de navegación para la categoría
                const categoriaMenuContainer = document.createElement('div');
                categoriaMenuContainer.className = 'categoria-menu';
                const categoriaMenuList = document.createElement('ul');
                categoriaMenuContainer.appendChild(categoriaMenuList);
                container.appendChild(categoriaMenuContainer);

                // Añadir categorías al menú de la categoría
                for (const cat of Object.keys(productosPorCategoria)) {
                    const categoriaMenuItem = document.createElement('li');
                    categoriaMenuItem.innerHTML = `<a href="#${cat}">${cat}</a>`;
                    categoriaMenuList.appendChild(categoriaMenuItem);
                }

                // Crear productos para la categoría
                productos.forEach(producto => {
                    const productoDiv = document.createElement('div');
                    productoDiv.className = 'producto';
                    productoDiv.innerHTML = `
                        <div class="imagen">
                            <img src="${producto.imagen_principal}" alt="">
                            <img src="${producto.imagen_secundaria}" class="secundaria" alt="">
                        </div>
                        <h2>${producto.titulo}</h2>
                        <p>${producto.descripcion}</p>
                        <p class="precio">$${producto.precio}</p>
                        <div class="botones-compra">
                            <button class="button1" onclick="addToCart(${JSON.stringify(producto).replace(/"/g, '&quot;')})">Al Carrito</button>
                        </div>
                    `;
                    container.appendChild(productoDiv);
                });
            }
        })
        .catch(error => console.error('Error:', error));
});
