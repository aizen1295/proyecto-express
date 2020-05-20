const express = require('express');
const router = express.Router();

//requerir controladores
const marca = require('../controllers/marca');

// listar marca
router.get('/marca', marca.index);
//agregar marca
router.post('/marca/agregar', marca.create);
//llenar input marca
router.get('/marca/actualizar/:id', marca.show);
//editar marca
router.post('/marca/editar/:id', marca.edit);
//eliminar marca
router.delete('/marca/eliminar/:id', marca.delete);
module.exports = router;
