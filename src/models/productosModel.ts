import mongoose from "mongoose";



const Producto = mongoose.model('productos', new mongoose.Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    bodega: {type: mongoose.Schema.Types.ObjectId, ref: 'bodegas', required: true},
    fechaCreacion: {type: Date, default: Date.now},
}));


export {Producto}