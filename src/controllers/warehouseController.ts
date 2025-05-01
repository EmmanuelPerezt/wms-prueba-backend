import { warehouse } from "../models/warehouseModel";
import { connectDB } from "../utils/dbConection"
import { Request, Response } from "express";


const getAllbodegas = async (req: Request, res: Response) =>{
    await connectDB();
    const bodegas = await warehouse.find();
    if (bodegas.length === 0){
         res.status(404).json({
            message: "no hay bodegas"
        });
    }
         res.status(200).json({
        bodegas
        });
}


const addBodega = async (req: Request, res: Response) => {
    await connectDB();

    const { name, location, description} = req.body;
    const bodega = new warehouse({
        name,
        location,
        description,
    })
    await bodega.save()
        .then((data)=>{
            res.status(200).json({
                message: "Bodega creada"
            })
        })
        .catch((error)=>{
            res.status(500).json({
                message: "Error al crear la bodega",
                error: error
            })
        })
};

export {getAllbodegas, addBodega}
