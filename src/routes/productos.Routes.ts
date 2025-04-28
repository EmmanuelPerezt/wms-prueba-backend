import { Router, Request, Response } from "express";

const productRoutes = Router();




productRoutes.get('/productos', (req:Request, res:Response)=>{

    console.log('productos')
})


export {productRoutes}