import mongoose from "mongoose";



const warehouse = mongoose.model('warehouse', new mongoose.Schema({
  warehouse_name: { type: String, required: true },
  warehouse_code: { type: String, required: true },
  square_meters: { type: Number },
  aisle_count: { type: Number },
  racks_per_aisle: { type: Number },
  levels_per_rack: { type: Number },
  Default: { type: Boolean, default: false },
  status: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}));
export {warehouse}