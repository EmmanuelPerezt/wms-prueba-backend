import { Request, Response } from 'express';
import { connectDB } from '../utils/dbConection';
import { Stock } from '../models/stockModel';



const getStock = async (req:Request, res:Response) => {

    await connectDB();
    try {
        const stock = await Stock.find().populate('product_id').populate('warehouse_id');
        !stock? res.status(404).json({ 
        message: "No hay stock disponible"
    }) : res.status(200).json({
        message: "Stock encontrado",
        stock
    });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el stock",
            error
        });
    }
}
const getStockById = async (req:Request, res:Response) => {
    const { id } = req.params;
    await connectDB();
    try {
        const stock = await Stock.findById(id).populate('product_id').populate('warehouse_id');
        stock ? res.status(200).json({
            message: "Stock encontrado",
            stock
        }) : res.status(404).json({
            message: "Stock no encontrado"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el stock por ID",
            error
        });
    }
}

const createStock = async (req:Request, res:Response) => {
    const { product_id, warehouse_id, location_code, batch_number, expiry_date, serial_number, quantity, reserved_quantity, available_quantity, last_movement_date, status } = req.body;
    await connectDB();
    try {
        const stock = new Stock({product_id, warehouse_id, location_code, batch_number, expiry_date, serial_number, quantity, reserved_quantity, available_quantity, last_movement_date, status});
        await stock.save();
        res.status(201).json({
            message: "Stock creado exitosamente",
            stock
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al crear el stock",
            error
        });
    }
}

const updateStock = async (req:Request, res:Response) => {
    const { id } = req.params;
    const stockData = req.body;
    await connectDB();
    try {
        const stockUpdated = await Stock.findByIdAndUpdate(id, stockData);
        stockUpdated ? res.status(200).json({
            message: "Stock actualizado exitosamente",
            stock: stockUpdated
        })
        : res.status(404).json({
            message: "Stock no encontrado"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el stock",
            error
        });
    }
}

const deleteStock = async (req:Request, res:Response) => {
    const { id } = req.params;
    await connectDB();
    try {
        const stockDeleted = await Stock.findByIdAndDelete(id);
        stockDeleted ? res.status(200).json({
            message: "Stock eliminado exitosamente",
            stock: stockDeleted
        })
        : res.status(404).json({
            message: "Stock no encontrado"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el stock",
            error
        });
        
    }
}

export {getStock, getStockById, createStock, updateStock, deleteStock};