import { Router } from "express";
import { addProduct, deleteProduct, filterProducts, findById, getAllProductsWithoutDetails, updateProduct } from "../controllers/productController";

const productRoutes = Router();


productRoutes.get('/', filterProducts);
productRoutes.get('/list', getAllProductsWithoutDetails)
productRoutes.get('/:id', findById);
productRoutes.post('/', addProduct);
productRoutes.patch('/:id', updateProduct)
productRoutes.delete('/:id', deleteProduct);





export {productRoutes}