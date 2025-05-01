import mongoose from "mongoose";



const Product = mongoose.model('product', new mongoose.Schema({
    name: {type: String, required: true},
    SKU: {type: String, required: true},
    stock: {type: Number, required: true},
    package_number: {type: Number, required: true},
    provider: {type: String, required : true},
    registration_date: {type: Date, default: Date.now},
    warehouse_location: {type: mongoose.Schema.Types.ObjectId, ref: 'warehouse', required: true}
}));


export {Product}