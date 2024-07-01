import express from 'express';
import { PORT } from './public/js/config.js';
import apiRoutes from './routes.js';
import path from 'path';

const app = express();

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas de la API desde routes.js
app.use(apiRoutes);

// Ruta para servir la página de productos
app.get('/catalogo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'catalogo.html'));
});

// Ruta para servir la página de colecciones
app.get('/colecciones', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'nueva_coleccion.html'));
});

// Ruta para servir la página de inicio de sesión
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Middleware para manejar errores (ejemplo)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Hubo un error!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
