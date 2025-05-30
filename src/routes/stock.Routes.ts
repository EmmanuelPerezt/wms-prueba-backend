import { Router } from "express"
import { getStock, getStockById, createStock, updateStock, deleteStock } from "../controllers/stockController";
import { get } from "mongoose";

const stockRoutes = Router();


stockRoutes.get('/', getStock);
stockRoutes.get('/:id', getStockById);
stockRoutes.post('/', createStock);
stockRoutes.patch('/:id', updateStock);
stockRoutes.delete('/:id', deleteStock);





export { stockRoutes };