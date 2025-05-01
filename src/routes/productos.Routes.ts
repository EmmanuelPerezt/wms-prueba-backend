import { Router } from "express";
import { addProduct, filterProducts, updateStock } from "../controllers/productController";

const productRoutes = Router();


productRoutes.post('/ingresos', addProduct);


productRoutes.put('/stock/:id', updateStock);

productRoutes.get('/stock', filterProducts);





export {productRoutes}