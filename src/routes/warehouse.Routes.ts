import { Router } from "express";
import { addWarehouse, deleteWarehouse, getAllWarehouse, updateWareouse } from "../controllers/warehouseController";

const warehouseRoutes = Router();



warehouseRoutes.get('/warehouse', getAllWarehouse);
warehouseRoutes.get('/warehouse/:id', getAllWarehouse); 
warehouseRoutes.post('/warehouse', addWarehouse);
warehouseRoutes.patch('/warehouse/:id', updateWareouse);
warehouseRoutes.delete('/warehouse/:id', deleteWarehouse);

// warehouseRoutes.post('/',addBodega);
// warehouseRoutes.get('/', getAllbodegas);




export {warehouseRoutes}


