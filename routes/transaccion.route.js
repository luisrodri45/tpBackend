const transaccionCtrl = require ("./../controllers/transaccion.controller.js");
const express = require('express');
const router = express.Router();
//Definimos las rutas para la gestion de transaccion
router.post("/",transaccionCtrl.addTransaccion);
router.get("/",transaccionCtrl.getTransacciones);
router.get("/:id",transaccionCtrl.getTransaccionesCliente);
router.get("/:monedaOrigen/:monedaDestino",transaccionCtrl.getTransaccionesMoneda);
module.exports = router;
