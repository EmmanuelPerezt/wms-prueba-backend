import mongoose from "mongoose";

const Inventory = mongoose.model('inventory', new mongoose.Schema({
    warehouse_location: {type : mongoose.Schema.Types.ObjectId, ref: 'warehouse', required: true},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true}],
    is_Active: {type: Boolean, default: true}
}));
export {Inventory}