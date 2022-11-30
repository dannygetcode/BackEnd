const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({

    //dentro de esto creamos los atributos
    nombre: { type: String, require: true, trim: true},
    //llamamos al usuario
    creador: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
    creado:{type: Date, default: Date.now()},


});


//definir el modelo

module.exports = mongoose.model("Categroia", CategoriaSchema);