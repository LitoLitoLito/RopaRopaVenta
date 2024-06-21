document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var dni = document.getElementById('dni').value;
  var provincia = document.getElementById('provincia').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var rating = document.querySelector('input[name="rating"]:checked');
  var comentarios = document.getElementById('mensaje').value;
  var acepto_terminos = document.getElementById('acepto_terminos').checked;

  // Validaciones
  if (!nombre || !apellido || !dni || !provincia || !email || !password || !rating || !comentarios || !acepto_terminos) {
    alert('Todos los campos son obligatorios');
  } else if (nombre.length < 3 || nombre.length > 20) {
    alert('El nombre debe tener entre 3 y 20 caracteres');
  } else if (apellido.length < 2 || apellido.length > 20) {
    alert('El apellido debe tener entre 2 y 20 caracteres');
  } else if (dni.length < 6 || dni.length > 8 || isNaN(dni)) {
    alert('El DNI debe tener entre 6 y 8 números');
  } else if (provincia === "Selecciona una provincia") {
    alert('Selecciona una provincia válida');
  } else if (!email.includes('@') || !email.includes('.')) {
    alert('El email debe contener un "@" y un "."');
  } else if (password.length < 5 || !/\d/.test(password)) {
    alert('La contraseña debe tener al menos 5 caracteres e incluir un número');
  } else {
    // Enviar datos al servidor
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellido, dni, provincia, email, password, rating: rating.value, comentarios, acepto_terminos })
    })
    .then(response => response.json())
    .then(data => {
      if (data.mensaje === 'Usuario registrado exitosamente') {
        // Mostrar mensaje de éxito
        document.getElementById('successMessage').style.display = 'block';

        // Limpiar el formulario
        document.getElementById('registrationForm').reset();
      } else {
        alert(data.mensaje);
      }
    })
    .catch(error => console.error('Error:', error));
  }
});
