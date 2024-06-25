// Continuar con la compra

document.addEventListener('DOMContentLoaded', function() {
    const botonSeguirComprando = document.querySelector('.tu-compra .boton-enviar');

    botonSeguirComprando.addEventListener('click', function() {
        window.location.href = 'catalogo.html';
    });
});

// funcionalidad de boton ACTUALIZAR 

document.addEventListener('DOMContentLoaded', function() {
    const botonActualizarRegistro = document.querySelector('.tu-perfil .boton-actualizar');
    const successMessage = document.getElementById('successMessage');

    botonActualizarRegistro.addEventListener('click', async function() {
        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const dni = document.getElementById('dni').value;
        const provincia = document.getElementById('provincia').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;

        // Crear objeto con los datos del formulario
        const formData = {
            nombre,
            apellido,
            dni,
            provincia,
            email,
            password,
            rating
        };

        try {
            // Realizar la solicitud PUT utilizando fetch
            const response = await fetch(`/venta_ropa/usuarios/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el usuario');
            }

            // Mostrar mensaje de éxito
            successMessage.style.display = 'block';
            successMessage.textContent = '¡Formulario enviado con éxito!';
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            // Mostrar mensaje de error
            successMessage.style.color = 'red';
            successMessage.style.display = 'block';
            successMessage.textContent = 'Error al enviar el formulario';
        }
    });
});



// funcionalidad del boton BORRAR