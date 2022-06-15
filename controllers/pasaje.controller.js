const Pasaje = require("../models/pasaje.js");
const pasajeCtrl = {}

//Dar de alta un pasaje (POST), enviar además el pasajero.
pasajeCtrl.addPasaje = async(req,res)=>{
    var pasaje = new Pasaje(req.body);
    try{
        await pasaje.save();
        res.json({
            'status': '1',
            'msg': 'Pasaje guardado.'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion.'
        })
    }
}
//Recuperar TODOS los pasajes (GET) incluyendo la información de los pasajeros.
pasajeCtrl.getPasajes = async(req,res)=>{
    var pasajes = await Pasaje.find().populate('pasajero');
    res.json(pasajes);
}
//Eliminar un pasaje (DELETE)
pasajeCtrl.deletePasaje = async(req,res)=>{
    try {
        await Pasaje.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Pasaje borrado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
//Modificar un pasaje (PUT)
pasajeCtrl.updatePasaje = async(req,res)=>{
    const vPasaje = new Pasaje(req.body);
    try {
        await Pasaje.updateOne({ _id: req.body._id }, vPasaje);
        res.json({
            'status': '1',
            'msg': 'Pasaje actualizado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion actualizar'
        })
    }
}
//Recuperar SOLO los pasajeros que tienen una determinada categoría de Pasajero.
pasajeCtrl.getPasajesCategoria = async(req,res)=>{
    var criteria = {"categoriaPasajero":req.params.id};
    var pasajes = await Pasaje.find(criteria).populate('pasajero');
    res.json(pasajes);
}
//Devolver un pasaje
pasajeCtrl.getPasaje = async(req,res)=>{
    const pasaje = await Pasaje.findById(req.params.id);
    res.json(pasaje);
}

module.exports = pasajeCtrl;