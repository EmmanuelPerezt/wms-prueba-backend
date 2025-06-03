import mongoose from "mongoose";



const Product = mongoose.model('product', new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  unit_of_measure: { type: String },
  unit_base: { type: String },// aun no se bien que tipo de datos van a ser
  unit_logistic: { type: String },
  factor_convertor: { type: String },
  barcode: { type: String },
  is_batch_tracked: { type: Boolean, default: false },
  is_expiry_tracked: { type: Boolean, default: false },
  min_stock_level: { type: Number },
  max_stock_level: { type: Number },
  default_location: { type: String },
  supplier_id: { type: String }, // puedes reemplazar por ref si tienes modelo Supplier
  price: { type: mongoose.Schema.Types.Decimal128, default: 0.00 }, // o Number si no necesitas precisión alta
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  status: { type: String, enum: ['Activo', 'Inactivo', 'Obsoleto'], default: 'Activo' },
}));


export { Product }
