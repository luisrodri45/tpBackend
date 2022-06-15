const Libro = require('../models/libro');
const libroCtrl = {}

//Dar de alta un libro (POST)
libroCtrl.addLibro = async (req, res) => {
    var libro = new Libro(req.body);
    try {
        await libro.save();
        res.json({
            'status': '1',
            'msg': 'Libro guardado.'
        }
        )
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
//Recuperar TODOS los libros (GET)
libroCtrl.getLibros = async (req, res) => {
    var libros = await Libro.find();
    res.json(libros);
}
//Eliminar un libro (DELETE)
libroCtrl.deleteLibro = async (req, res) => {
    try {
        await Libro.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Libro borrado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
//Modificar un libro (PUT)
libroCtrl.editLibro = async (req, res) => {
    const vlibro = new Libro(req.body);
    try {
        await Libro.updateOne({ _id: req.body._id }, vlibro);
        res.json({
            'status': '1',
            'msg': 'Libro actualizado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
//Recuperar los libros DESTACADOS (GET)
libroCtrl.getLibrosDestacados = async (req, res) => {
    Libro.find({destacado: true},function (err, course) {res.json(course);});
}
module.exports = libroCtrl;
