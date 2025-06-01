import { warehouse } from "../models/warehouseModel";
import { connectDB } from "../utils/dbConection"
import { Request, Response } from "express";


const getAllWarehouse = async (_req: Request, res: Response) => {
  await connectDB();
  const bodegas = await warehouse.find();
  if (bodegas.length === 0) {
    res.status(404).json({
      message: "no hay bodegas"
    });
  }
  res.status(200).json({
    bodegas
  });
}

const getWarehouseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await connectDB();
    const bodega = await warehouse.findById(id);
    if (!bodega) {
      res.status(404).json({
        message: "Bodega no encontrada"
      });
    }
    res.status(200).json({
      bodega
    });

  } catch (error) {
    res.status(500).json({
      message: "error al buscar warehouse",
      error
    })
  }
}


const addWarehouse = async (req: Request, res: Response) => {
  await connectDB();

  const {
    warehouse_name,
    warehouse_code,
    square_meters,
    aisle_count,
    racks_per_aisle,
    levels_per_rack,
    Default,
    status
  } = req.body;
  const newWarehouse = new warehouse({
    warehouse_name,
    warehouse_code,
    square_meters,
    aisle_count,
    racks_per_aisle,
    levels_per_rack,
    Default,
    status

  })
  await newWarehouse.save()
    .then((_data) => {
      res.status(201).json({
        message: "Bodega creada"
      })
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error al crear la bodega",
        error
      })
    })
};
const updateWareouse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  await connectDB();
  try {
    const updatedWarehouse = await warehouse.findByIdAndUpdate(id, updateData)
    res.status(200).json({
      message: "bodega actualizada",
      updatedWarehouse
    })
  } catch (error) {
    res.status(500).json({
      message: "error to update warehouse",
      error
    })
  }
}

const deleteWarehouse = async (req: Request, res: Response) => {
  const { id } = req.params;
  await connectDB();
  try {
    const deletedWarehouse = await warehouse.findByIdAndDelete(id);
    if (!deletedWarehouse) {
      res.status(404).json({
        message: "Bodega no encontrada"
      });
    }
    res.status(200).json({
      message: "Bodega eliminada",
      deletedWarehouse
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la bodega",
      error
    });
  }
}

export { getAllWarehouse, addWarehouse, updateWareouse, deleteWarehouse, getWarehouseById }
