import mongoose from "mongoose";


const History = mongoose.model('History', new mongoose.Schema({
  sku: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  id_warehouse: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  movement_type: { type: String, enum: ['Entrada', 'Salida'], required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //pedido pero aun no esta definido
}));


export { History };
