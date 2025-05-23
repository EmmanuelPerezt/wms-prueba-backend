import mongoose from "mongoose";


const User = mongoose.model('user', new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['admin', 'user','adminBodega'], default: 'user'},
    warehouse_location: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'warehouse',}
    ]
}));
export {User}