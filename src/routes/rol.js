const express = require('express');
const router = express.Router();

//requerir controladores
const rol = require('../controllers/rol');

//listar rol
router.get('/rol', rol.index);
//agregar rol
router.post('/rol/agregar', rol.create);
//llenar input rol
router.get('/rol/actualizar/:id', rol.show);
//editar rol
router.post('/rol/editar/:id', rol.edit);
//eliminar rol
router.delete('/rol/eliminar/:id', rol.delete);

module.exports = router;
