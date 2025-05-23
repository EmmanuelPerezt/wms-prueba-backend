import mongoose from "mongoose";



const Product = mongoose.model('product', new mongoose.Schema({
    SKU: {type: String, required: true},
    name: {type: String, required: true},
    stock: {type: Number, required: true},
    minimum_stock: {type: Number, required: true},
    maximum_stock: {type: Number, required: true},
    lot: {type: String, required: true},
    serial_number: {type: String, required: true},
    expiration_date: {type: Date, required: true},
    warehouse_location: {type: mongoose.Schema.Types.ObjectId, ref: 'warehouse', required: true},
    pediment: {type: String, required: true},
    action: {type: String, required: true }
}));


export {Product}