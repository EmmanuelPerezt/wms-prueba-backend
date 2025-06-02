import mongoose from "mongoose";


const History = mongoose.model('History', new mongoose.Schema({
  name: { type: String, required: true },
}));




export { History };
