import express from 'express';
import { pool } from './public/js/db.js';
import { PORT } from './public/js/config.js';

const app = express();

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta para obtener los productos
app.get('/api/productos', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM productos'); // Cambia "productos" por tu tabla real
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para obtener las colecciones
app.get('/api/colecciones', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM colecciones'); // Cambia "colecciones" por tu tabla real
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Ruta para servir la página de productos
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/catalogo.html');
});

// Ruta para servir la página de colecciones
app.get('/colecciones', (req, res) => {
  res.sendFile(__dirname + '/public/nueva_coleccion.html');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

