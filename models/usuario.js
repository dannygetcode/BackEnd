const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({

    //dentro de esto creamos los atributos
    nombre: { type: String, require: true, trim: true},
    //solo un correo por usuario
    email: {type: String, require: true, trim: true, unique: true},
    password:{type: String, require:true, trim:true},
    //de tipo fecha, registra dia mes y año, fecha acutal
    registro:{type: Date, default: Date.now()},


});


//definir el modelo

module.exports = mongoose.model("Usuario", UsuariosSchema);