const express = require('express');
const router = express.Router();

//requerir controladores
const persona = require('../controllers/persona');

//listar persona
router.get('/persona', persona.index);
//agregar persona
router.post('/persona/agregar', persona.create);
//llenar input persona
router.get('/persona/actualizar/:id', persona.show);
//editar persona
router.post('/persona/editar/:id', persona.edit);
//eliminar persona
router.delete('/persona/eliminar/:id', persona.delete);

module.exports = router;
