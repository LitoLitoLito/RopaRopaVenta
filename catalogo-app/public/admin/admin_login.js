document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/admin_login_1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('admin-panel').style.display = 'block';
            document.getElementById('successMessage').style.display = 'block';
        } else {
            alert(data.mensaje);
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Error interno al iniciar sesión');
    }
});
