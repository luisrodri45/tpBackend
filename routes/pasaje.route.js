const pasajeCtrl = require("./../controllers/pasaje.controller.js");
const express = require('express');
const router = express.Router();

router.post("/",pasajeCtrl.addPasaje);
router.get("/",pasajeCtrl.getPasajes);
router.delete("/:id",pasajeCtrl.deletePasaje);
router.put("/:id",pasajeCtrl.updatePasaje);
router.get("/:id",pasajeCtrl.getPasajesCategoria);
router.get("/editar/:id",pasajeCtrl.getPasaje);

module.exports = router;