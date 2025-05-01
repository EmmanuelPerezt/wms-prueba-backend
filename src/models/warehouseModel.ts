import mongoose from "mongoose";



const warehouse = mongoose.model('warehouse', new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: false},
}));
export {warehouse}