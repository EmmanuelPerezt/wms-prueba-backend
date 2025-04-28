import mongoose from "mongoose";



const bodega = mongoose.model('bodegas', new mongoose.Schema({
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    ciudad: {type: String, required: true},
    estado: {type: String, required: true},
}));
export {bodega}