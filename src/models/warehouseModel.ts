import mongoose from "mongoose";
import { type } from "os";



const warehouse = mongoose.model('warehouse', new mongoose.Schema({
    name: {type: String, required: true},
    hallway_number: {type: Number,required: true},
    rack_per_hallway: {type: Number,required: true},
    levels_per_rack: {type: Number,required: true},
}));
export {warehouse}