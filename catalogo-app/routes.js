import express from 'express';
import { pool } from './public/js/db.js'; // Asegúrate de que esta ruta es correcta

const router = express.Router();

// Ruta para obtener colecciones
router.get('/api/colecciones1', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM colecciones'); // Cambia "productos" por tu tabla real
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para obtener una coleccion por ID
router.get('/api/colecciones1/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const [results] = await pool.query('SELECT * FROM colecciones WHERE id_colecciones = ?', [productId]);
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send({ mensaje: 'Producto de colección no encontrado' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para actualizar una coleccion por ID
router.put('/api/colecciones1/:id', async (req, res) => {
  const productId = req.params.id;
  const { categoria, titulo, descripcion, precio, imagen_principal, imagen_secundaria, disponible } = req.body;

  // Validaciones adicionales del servidor
  if (!categoria || !titulo || !descripcion || !precio || !imagen_principal || !imagen_secundaria || disponible === undefined) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    // Actualiza el producto en la base de datos
    const [result] = await pool.execute(
      'UPDATE colecciones SET categoria=?, titulo=?, descripcion=?, precio=?, imagen_principal=?, imagen_secundaria=?, disponible=? WHERE id_colecciones=?',
      [categoria, titulo, descripcion, precio, imagen_principal, imagen_secundaria, disponible, productId]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ mensaje: 'Producto de Colección actualizado exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Producto de Colección no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el producto de Colección:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

// Ruta para obtener los productos
router.get('/api/productos', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM productos'); 
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para obtener un producto por ID
router.get('/api/productos/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const [results] = await pool.query('SELECT * FROM productos WHERE id_productos = ?', [productId]);
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send({ mensaje: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para actualizar un producto por ID
router.put('/api/productos/:id', async (req, res) => {
  const productId = req.params.id;
  const { categoria, titulo, descripcion, precio, imagen_principal, imagen_secundaria, disponible } = req.body;

  // Validaciones adicionales del servidor
  if (!categoria || !titulo || !descripcion || !precio || !imagen_principal || !imagen_secundaria || disponible === undefined) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    // Actualiza el producto en la base de datos
    const [result] = await pool.execute(
      'UPDATE productos SET categoria=?, titulo=?, descripcion=?, precio=?, imagen_principal=?, imagen_secundaria=?, disponible=? WHERE id_productos=?',
      [categoria, titulo, descripcion, precio, imagen_principal, imagen_secundaria, disponible, productId]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ mensaje: 'Producto actualizado exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
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

// Ruta para mostrar el formulario de inicio de sesión administrador (GET)
router.get('/admin_login_1', (req, res) => {
  res.sendFile(__dirname + '/public/admin/admin_login.js');
});
// Ruta para procesar el inicio sesión del administrador  (POST)
router.post('/admin_login_1', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consulta para verificar las credenciales del usuario en la base de datos
    const [rows, fields] = await pool.execute('SELECT * FROM administradores WHERE email = ? AND password = ?', [email, password]);

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

// Ruta PUT para actualizar un usuario por ID
router.put('/api/usuarios/:id', async (req, res) => {
  const userId = req.params.id;
  const { nombre, apellido, dni, provincia, email, password, rating, comentarios, acepto_terminos } = req.body;

  // Validaciones adicionales del servidor
  if (!nombre || !apellido || !dni || !provincia || !email || !password || !rating || !comentarios || !acepto_terminos) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    // Actualiza el usuario en la base de datos
    const [result] = await pool.execute(
      'UPDATE usuarios SET nombre=?, apellido=?, dni=?, provincia=?, email=?, password=?, rating=?, comentarios=?, acepto_terminos=? WHERE id=?',
      [nombre, apellido, dni, provincia, email, password, rating, comentarios, acepto_terminos, userId]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ mensaje: 'Usuario actualizado exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

// Ruta DELETE para borrar un usuario por ID
router.delete('/api/usuarios/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    // Borra el usuario de la base de datos
    const [result] = await pool.execute('DELETE FROM usuarios WHERE id=?', [userId]);

    if (result.affectedRows > 0) {
      res.status(200).json({ mensaje: 'Usuario borrado exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al borrar el usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});


// Ruta para eliminar un producto por ID
router.delete('/api/productos/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const [result] = await pool.execute('DELETE FROM productos WHERE id_productos = ?', [productId]);
    if (result.affectedRows > 0) {
      res.status(200).json({ mensaje: 'Producto eliminado exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

// Ruta para agregar un producto
router.post('/api/productos1', async (req, res) => {
  const { categoria, titulo, descripcion, precio, imagen_principal, imagen_secundaria, disponible, } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO productos (categoria, titulo, descripcion, precio,  imagen_principal, imagen_secundaria, disponible) VALUES (?, ?, ?, ?, ?, ?, ?)', [categoria, titulo, descripcion, precio, imagen_principal, imagen_secundaria, disponible]);
    res.status(201).json({ id: result.insertId, mensaje: 'Producto agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});


export default router;
