import { Router } from "express";
import { addProduct, deleteProduct, filterProducts, findById, updateProduct } from "../controllers/productController";

const productRoutes = Router();


productRoutes.get('/product', filterProducts);
productRoutes.get('/product/:id', findById); // Assuming you want to filter by ID as well
productRoutes.post('/product', addProduct);
productRoutes.patch('/product/:id', updateProduct)
productRoutes.delete('/product/:id', deleteProduct);





export {productRoutes}