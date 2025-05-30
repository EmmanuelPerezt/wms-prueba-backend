import { Router } from "express";
import { addProduct, deleteProduct, filterProducts, findById, updateProduct } from "../controllers/productController";

const productRoutes = Router();


productRoutes.get('/', filterProducts);
productRoutes.get('/:id', findById); // Assuming you want to filter by ID as well
productRoutes.post('/', addProduct);
productRoutes.patch('/:id', updateProduct)
productRoutes.delete('/:id', deleteProduct);





export {productRoutes}