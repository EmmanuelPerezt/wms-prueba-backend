import { Router } from "express";
import { getAllbodegas, addBodega } from "../controllers/bodegController";

const bodegasRoutes = Router();


bodegasRoutes.post('/',addBodega);
bodegasRoutes.get('/', getAllbodegas);




export {bodegasRoutes}


