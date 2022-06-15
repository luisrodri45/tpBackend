const Persona = require("../models/persona.js");
const personaCtrl = {};

//Dar de alta una persona (POST)
personaCtrl.addPersona = async (req,res)=>{
    var persona = new Persona(req.body);
    try{
        await persona.save();
        res.json({
            'status': '1',
            'msg': 'Persona guardada.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
//Obtener todas las personas (GET)
personaCtrl.getPersonas = async (req,res)=>{
    var personas = await Persona.find();
    res.json(personas);
}
//Obtener UNA persona (GET)
personaCtrl.getPersona = async (req,res)=>{
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
}

module.exports = personaCtrl;