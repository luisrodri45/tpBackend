const personaCtrl = require("./../controllers/persona.controller.js");
const express = require('express');
const router = express.Router();

router.post("/",personaCtrl.addPersona);
router.get("/",personaCtrl.getPersonas);
router.get("/:id",personaCtrl.getPersona);

module.exports = router;
