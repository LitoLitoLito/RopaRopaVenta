document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dni = document.getElementById('dni').value;
    var provincia = document.getElementById('calId').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var terms = document.getElementById('terms').checked;
  
    // Validaciones
    if (!nombre) {
        alert('El nombre es obligatorio');
    } else if (nombre.length < 3 || nombre.length > 20) {
        alert('El nombre debe tener entre 3 y 20 caracteres');
    } else if (!apellido) {
        alert('El apellido es obligatorio');
    } else if (apellido.length < 2 || apellido.length > 20) {
        alert('El apellido debe tener entre 2 y 20 caracteres');
    } else if (!dni) {
        alert('El DNI es obligatorio');
    } else if (dni.length < 6 || dni.length > 8 || isNaN(dni)) {
        alert('El DNI debe tener entre 6 y 8 números');
    } else if (!provincia || provincia === "Provincia") {
        alert('La provincia es obligatoria');
    } else if (!email) {
        alert('El email es obligatorio');
    } else if (!email.includes('@') || !email.includes('.')) {
        alert('El email debe contener un "@" y un "."');
    } else if (!password) {
        alert('La contraseña es obligatoria');
    } else if (password.length < 5 || !/\d/.test(password)) {
        alert('La contraseña debe tener al menos 5 caracteres e incluir un número');
    } else if (!rating) {
        alert('Debes seleccionar una calificación');
    } else if (!terms) {
        alert('Debes aceptar los términos y condiciones');
    } else {
        // Mostrar mensaje de éxito
        document.getElementById('successMessage').style.display = 'block';
  
        // Limpiar el formulario
        document.getElementById('registrationForm').reset();
    }
  });
  