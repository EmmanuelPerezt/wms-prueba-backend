import { Request, Response } from 'express';
import { connectDB } from '../utils/dbConection';
import { Producto } from '../models/productosModel';




export const addProduct = async (req: Request, res: Response) => {
    await connectDB();
    const { nombre, precio, stock, bodega, } = req.body;

    const newProduct = new Producto({
        nombre,
        precio,
        stock,
        bodega,
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



export const filterProducts = async (req:Request, res:Response) => {
    const { nombre, precio, stock, bodega, fechaCreacion } = req.query;
    await connectDB();
    if (!req.query){
        const allproductos = await Producto.find();
        res.status(200).json({
            message: "Todos los productos",
            allproductos
        })
    }
    //se puede mejorar
const filtros: any = {};
    if (nombre) filtros.nombre = nombre;
    if (precio) filtros.precio = precio;
    if (stock) filtros.stock = stock;
    if (bodega) filtros.bodega = bodega;
    if (fechaCreacion) filtros.fechaCreacion = fechaCreacion;

    
    const productos =await Producto.find(filtros);
    if (productos.length === 0) {
        res.status(404).json({
            message: "No se encontraron productos con esos filtros"
        });
    }
    res.status(200).json({
        message: "Productos encontrados",
        productos
    })

}