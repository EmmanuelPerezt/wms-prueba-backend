import mongoose from "mongoose";

const Stock = mongoose.model('stock', new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
  warehouse_id: { type: mongoose.Schema.Types.ObjectId, ref: 'warehouse', required: true },
  location_code: { type: String },
  batch_number: { type: String },
  expiry_date: { type: Date },
  serial_number: { type: String },
  quantity: { type: Number, required: true },
  reserved_quantity: { type: Number, default: 0 },
  available_quantity: { type: Number, default: 0 },
  last_movement_date: { type: Date },
  status: { type: String, enum: ['Activo', 'Inactivo', 'Reservado', 'Agotado'], default: 'Activo' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}));

export { Stock }