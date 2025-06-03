import { Router } from "express";
import { addHistoryItem, getAllHistory } from "../controllers/historyController";


const historyRoutes = Router();

historyRoutes.get('/', getAllHistory);
historyRoutes.post('/', addHistoryItem);


export { historyRoutes };
