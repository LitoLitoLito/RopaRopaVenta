document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registrationForm');
  const mensajeRegistro = document.getElementById('successMessage'); // Aquí se corrige el nombre

  registrationForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch('/register', requestOptions);
      const data = await response.json();

      // Manejar el mensaje de respuesta
      mensajeRegistro.innerHTML = `<p>${data.mensaje}</p>`; // Aquí también se corrige el nombre
      mensajeRegistro.style.display = 'block'; // Mostrar el mensaje de éxito

      // Opcional: Limpiar el formulario después de éxito
      registrationForm.reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      mensajeRegistro.innerHTML = '<p>Error interno del servidor</p>';
      mensajeRegistro.style.display = 'block'; // Mostrar el mensaje de error interno
    }
  });
});
