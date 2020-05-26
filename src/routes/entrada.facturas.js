const express = require('express');
const router = express.Router();

//requerir controladores
const pedido = require('../controllers/pedido');

//listar pedidos
router.get('/pedido', pedido.index);
//agregar pedido
router.post('/pedido/agregar', pedido.create);
//llenar input pedido
router.get('/pedido/actualizar/:id', pedido.show);
//editar pedido
router.post('/pedido/editar/:id', pedido.edit);
//eliminar pedido
router.delete('/pedido/eliminar/:id', pedido.delete);
//traer valor venta
router.get('/pedido/calcular/:id', pedido.cal);

module.exports = router;
