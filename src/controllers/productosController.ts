import { Request, Response } from 'express';
import { connectDB } from '../utils/dbConection';
import { Producto } from '../models/productosModel';




export const addProduct = async (req: Request, res: Response) => {
    await connectDB();
    const { nombre, precio, stock, bodega, fechaCreacion } = req.body;

    const newProduct = new Producto({
        nombre,
        precio,
        stock,
        bodega,
        fechaCreacion
    });

    await newProduct.save()
        .then((data) => {
            res.status(200).json({
                message: "Producto creado",
                data
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error al crear el producto",
                error
            });
        });
}



export const updateStock = async (req:Request, res:Response)=>{
   const {id} = req.params;
   const {stock} = req.body;
   await connectDB();
   await Producto.updateOne({_id:id}, {$set:{stock:stock}});
   const update = await Producto.find ({_id:id});

   res.status(200).json({
       message: "Stock actualizado",
       update
   });
}
