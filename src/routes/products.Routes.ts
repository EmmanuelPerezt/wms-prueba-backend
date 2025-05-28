import { Router } from "express";
import { addProduct, deleteProduct, filterProducts, updateProduct } from "../controllers/productController";

const productRoutes = Router();


productRoutes.get('/product', filterProducts);
productRoutes.post('/product', addProduct);
productRoutes.patch('/product/:id', updateProduct)
productRoutes.delete('/product/:id', deleteProduct);





export {productRoutes}