const Transaccion = require("../models/transaccion.js");
const transaccionCtrl = {}
//Dar de alta una Transaccion(POST)
transaccionCtrl.addTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
//Recuperar TODAS las Transacciones Registradas(GET)
transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}
//Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    Transaccion.find({ emailCliente: req.params.id }, function (err, course) {
        if (course.length > 0) {
            res.json(course);
        } else {
            res.status(400).json({
                'status': '0',
                'msg': 'Email no encontrado o no tiene transacciones aun hecha'
            })
        }
    });
}
//Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como parámetro (GET). Utilice el concepto de PARAMS.
transaccionCtrl.getTransaccionesMoneda = async (req, res) => {
    Transaccion.find({ monedaOrigen: req.params.monedaOrigen, monedaDestino: req.params.monedaDestino }, function (err, course) {
        res.json(course);
    })
}

module.exports = transaccionCtrl;
/* Query query = new Query();
query.addCriteria(Criteria.where("lastName").is("Paul"));
return mongoTemplate.find(query, ProfileVO.class); 
select * from empleados where apellido='Mamani' and nombre like '%E%'
*/