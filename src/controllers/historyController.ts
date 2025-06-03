import { Request, Response } from 'express';
import { connectDB } from '../utils/dbConection';
import { History } from '../models/historyModel';

const getAllHistory = async (req: Request, res: Response) => {
  await connectDB();
  try {
    const history = History.find();
    !history ? res.status(404).json({ message: 'No history found' }) : res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving history', error });
  }
}
const addHistoryItem = async (req: Request, res: Response) => {
  await connectDB();
  const { sku, id_warehouse, movement_type, quantity, user } = req.body;
  try {
    const historyItem = new History({
      sku,
      id_warehouse,
      movement_type,
      quantity,
      user
    });
    historyItem.save();
    res.status(201).json({ message: 'History item added successfully', historyItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding history item', error });
  }
}

export { getAllHistory, addHistoryItem };


