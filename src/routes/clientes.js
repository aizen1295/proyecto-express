const express = require('express');
const router = express.Router();

//requerir controladores
const clientes = require('../controllers/clientes');

//listar clientes
router.get('/clientes', clientes.index);
//agregar clientes
router.post('/clientes/agregar', clientes.create);
//llenar input clientes
router.get('/clientes/actualizar/:id', clientes.show);
//editar clientes
router.post('/clientes/editar/:id', clientes.edit);
//eliminar clientes
router.delete('/clientes/eliminar/:id', clientes.delete);
module.exports = router;
