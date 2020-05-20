const express = require('express');
const router = express.Router();

//requerir controladores
const producto = require('../controllers/productos');

//listar productos
router.get('/productos', producto.index);
//agregar productos
router.post('/productos/agregar', producto.create);
//llenar input productos
router.get('/productos/actualizar/:id', producto.show);
//editar productos
router.post('/productos/editar/:id', producto.edit);
//eliminar productos
router.delete('/productos/eliminar/:id', producto.delete);
module.exports = router;
