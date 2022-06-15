const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
//Libro
app.use('/api/libro', require('./routes/libro.route'));
//Transaccion
app.use('/api/transaccion', require('./routes/transaccion.route'));
//Persona
app.use('/api/persona',require('./routes/persona.route'))
//Pasaje
app.use('/api/pasaje',require('./routes/pasaje.route'))
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});
