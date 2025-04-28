import mongoose from "mongoose";



const producto = mongoose.model('productos', new mongoose.Schema({
    nombre: {type: String, required: true},

}));


export {producto}