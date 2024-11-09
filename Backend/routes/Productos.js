// backend/routes/productos.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los productos
router.get('/', (req, res) => {
    const query = 'SELECT * FROM productos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener productos:', err);
            res.status(500).json({ error: 'Error al obtener productos' });
        } else {
            res.json(results);
        }
    });
});






module.exports = router;
