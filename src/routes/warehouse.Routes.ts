import { Router } from "express";
import { addWarehouse, deleteWarehouse, getAllWarehouse, getWarehouseById, updateWareouse } from "../controllers/warehouseController";

const warehouseRoutes = Router();



warehouseRoutes.get('/', getAllWarehouse);
warehouseRoutes.get('/:id', getWarehouseById);
warehouseRoutes.post('/', addWarehouse);
warehouseRoutes.patch('/:id', updateWareouse);
warehouseRoutes.delete('/:id', deleteWarehouse);

// warehouseRoutes.post('/',addBodega);
// warehouseRoutes.get('/', getAllbodegas);




export { warehouseRoutes }


