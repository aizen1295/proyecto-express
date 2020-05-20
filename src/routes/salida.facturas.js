const express = require('express');
const router = express.Router();

//requerir controladores
const factura = require('../controllers/factura');

router.get('/factura', factura.index);
//agregar factura
router.post('/factura/agregar', factura.create);
//llenar input factura
router.get('/factura/actualizar/:id', factura.show);
//editar factura
router.post('/factura/editar/:id', factura.edit);
//eliminar factura
router.delete('/factura/eliminar/:id', factura.delete);
//traer valor venta
router.get('/factura/calcular/:id', factura.cal);

module.exports = router;
