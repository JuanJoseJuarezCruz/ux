// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productosRoutes = require('./routes/Productos.js');



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
