import mongoose from "mongoose";

const stock = mongoose.model( 'stock', new mongoose.Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  minimum_stock: { type: Number, default: 0 },
  maximum_stock: { type: Number },
  lote: { type: String },
  serial_number: { type: String },
  expiration_date: { type: Date },
  warehouse_location: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  pediment: { type: String },
  action: { type: String, enum: ['entrada', 'salida', 'ajuste', 'transferencia'], required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}));


export { stock}