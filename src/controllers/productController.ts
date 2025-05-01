import { Request, Response } from 'express';
import { connectDB } from '../utils/dbConection';
import { Product } from '../models/productModel';




export const addProduct = async (req: Request, res: Response) => {
    await connectDB();
    const { name, SKU, stock, package_number, provider, warehouse_location} = req.body;

    const newProduct = new Product({
        name, SKU, stock, package_number, provider, warehouse_location
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
   await Product.updateOne({_id:id}, {$set:{stock:stock}});
   const update = await Product.find ({_id:id});

   res.status(200).json({
       message: "Stock actualizado",
       update
   });
}



export const filterProducts = async (req:Request, res:Response) => {
    const { name, SKU, stock, package_number, provider, warehouse_location} = req.query;
    await connectDB();
    if (!req.query){
        const allproductos = await Product.find();
        res.status(200).json({
            message: "Todos los productos",
            allproductos
        })
    }
    //se puede mejorar
const filtros: any = {};
    if (name) filtros.name = name;
    if (SKU) filtros.SKU = SKU;
    if (stock) filtros.stock= stock;
    if (package_number) filtros.package_number = package_number;
    if (provider) filtros.provider = provider;
    if (warehouse_location) filtros.warehouse_location = warehouse_location;

    const productos =await Product.find(filtros);
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