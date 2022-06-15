//Defino controlador para el manejo de CRUD
const agenteCtrl = require('./../controllers/libro.controller.js');
//Creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//Definimos las rutas para la gestion de libro
router.get('/', agenteCtrl.getLibros);
router.post('/', agenteCtrl.addLibro);
router.put('/:id', agenteCtrl.editLibro);
router.delete('/:emailCliente', agenteCtrl.deleteLibro);
router.get("/destacados", agenteCtrl.getLibrosDestacados);
//Exportamos el modulo de rutas
module.exports = router;