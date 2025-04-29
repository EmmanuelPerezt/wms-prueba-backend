import { Router, Request, Response } from "express";
import { addProduct, updateStock } from "../controllers/productosController";

const productRoutes = Router();


productRoutes.post('/ingresos', addProduct);


productRoutes.put('/stock/:id', updateStock);





export {productRoutes}