import mongoose from "mongoose";


const Role = mongoose.model('role',new mongoose.Schema({
    name: {type: String, required: true},
    permissions: [{type: String, required: true}]
}))



export {Role}