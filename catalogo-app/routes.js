import express from 'express';
import { pool } from './public/js/db.js'; // Asegúrate de que esta ruta es correcta

const router = express.Router();

// Ruta para obtener los productos
router.get('/api/productos', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM productos'); // Cambia "productos" por tu tabla real
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para obtener las colecciones
router.get('/api/colecciones', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM colecciones'); // Cambia "colecciones" por tu tabla real
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para mostrar el formulario de inicio de sesión (GET)
router.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login-validation.js');
});

// Ruta para procesar el inicio de sesión (POST)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consulta para verificar las credenciales del usuario en la base de datos
    const [rows, fields] = await pool.execute('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password]);

    if (rows.length > 0) {
      // Usuario autenticado correctamente
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } else {
      // Credenciales incorrectas
      res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error interno al iniciar sesión' });
  }
});

// Ruta para manejar el registro de usuarios
router.post('/register', async (req, res) => {
  const { nombre, apellido, dni, provincia, email, password, rating, comentarios, acepto_terminos } = req.body;

  // Validaciones adicionales del servidor
  if (!nombre || !apellido || !dni || !provincia || !email || !password || !rating || !comentarios || !acepto_terminos) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    // Inserta el nuevo usuario en la base de datos
    const [result] = await pool.execute(
      'INSERT INTO usuarios (nombre, apellido, dni, provincia, email, password, rating, comentarios, acepto_terminos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nombre, apellido, dni, provincia, email, password, rating, comentarios, acepto_terminos]
    );

    if (result.affectedRows > 0) {
      res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } else {
      res.status(500).json({ mensaje: 'Error al registrar el usuario' });
    }
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});



export default router;
