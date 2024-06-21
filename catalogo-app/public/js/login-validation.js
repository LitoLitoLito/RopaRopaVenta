document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.mensaje === 'Inicio de sesión exitoso') {
        document.getElementById('successMessage').style.display = 'block';
        document.querySelectorAll('.li-registro').forEach(item => { // Ocultar enlaces de registro e inicio de sesión
            item.style.display = 'none';
        });
        document.querySelector('.li-logout').style.display = 'block'; // Mostrar enlace de cerrar sesión
        // Guardar el estado de sesión en localStorage
        localStorage.setItem('loggedIn', 'true');
    } else {
        alert(data.mensaje);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

document.getElementById('logoutLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir la acción por defecto del enlace

  // Realizar la lógica de cierre de sesión, si es necesario
  // Luego, actualizar la interfaz de usuario
  document.querySelectorAll('.li-registro').forEach(item => {
      item.style.display = 'block';
  });
  document.querySelector('.li-logout').style.display = 'none'; // Ocultar enlace de cerrar sesión
  document.getElementById('successMessage').style.display = 'none'; // Ocultar el mensaje de éxito de inicio de sesión

  // Borrar el estado de sesión en localStorage
  localStorage.removeItem('loggedIn');
});

// Verificar el estado de sesión al cargar la página
window.addEventListener('load', function() {
  if (localStorage.getItem('loggedIn') === 'true') {
      document.querySelectorAll('.li-registro').forEach(item => {
          item.style.display = 'none';
      });
      document.querySelector('.li-logout').style.display = 'block';
  }
});
