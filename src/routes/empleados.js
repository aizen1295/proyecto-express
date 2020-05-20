const express = require('express');
const router = express.Router();

//requerir controladores
const empleados = require('../controllers/empleados');

//listar empleados
router.get('/empleados', empleados.index);
//agregar empleados
router.post('/empleados/agregar', empleados.create);
//llenar input empleados
router.get('/empleados/actualizar/:id', empleados.show);
//editar empleados
router.post('/empleados/editar/:id', empleados.edit);
//eliminar empleados
router.delete('/empleados/eliminar/:id', empleados.delete);

module.exports = router;
