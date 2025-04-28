import { Router, Request, Response } from "express";


const bodegasRoutes = Router();


bodegasRoutes.get('/', (req:Request,res:Response)=>{
    console.log('bodegas');
    res.status(200).send("todo fino pa");
});
  export {bodegasRoutes}


