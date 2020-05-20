const express = require('express');
const router = express.Router();

//requerir controladores
const proveedor = require('../controllers/proveedor');

//listar proveedores
router.get('/proveedor', proveedor.index);
//agregar proveedores
router.post('/proveedor/agregar', proveedor.create);
//llenar input proveedor
router.get('/proveedor/actualizar/:id', proveedor.show);
//editar proveedor
router.post('/proveedor/editar/:id', proveedor.edit);
//eliminar proveedor
router.delete('/proveedor/eliminar/:id', proveedor.delete);

module.exports = router;
