import { Router, Request, Response } from "express";
import { addProduct, filterProducts, updateStock } from "../controllers/productosController";

const productRoutes = Router();


productRoutes.post('/ingresos', addProduct);


productRoutes.put('/stock/:id', updateStock);

productRoutes.get('/stock', filterProducts);





export {productRoutes}