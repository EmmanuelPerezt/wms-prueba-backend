import { Router, Request, Response } from "express";

const productRoutes = Router();




productRoutes.get('/', (req:Request, res:Response)=>{

    console.log('productos')
})


export {productRoutes}