import { Request, Response } from 'express';
import { connectDB } from '../utils/dbConection';
import { Product } from '../models/productModel';




export const addProduct = async (req: Request, res: Response) => {

  await connectDB();
  const {
    name,
    description,
    category,
    unit_of_measure,
    unit_base,
    unit_logistic,
    factor_convertor,
    barcode,
    is_batch_tracked,
    is_expiry_tracked,
    min_stock_level,
    max_stock_level,
    default_location,
    supplier_id,
    price,
  } = req.body;


  const newProduct = new Product({
    name,
    description,
    category,
    unit_of_measure,
    unit_base,
    unit_logistic,
    factor_convertor,
    barcode,
    is_batch_tracked,
    is_expiry_tracked,
    min_stock_level,
    max_stock_level,
    default_location,
    supplier_id,
    price,

  });

  const productSave = await newProduct.save();
  res.status(201).json({
    message: "Producto creado correctamente",
    product: {
      name: productSave.name,
      id: productSave._id,
    }
  });
}

export const getAllProductsWithoutDetails = async (_req: Request, res: Response) => {
  await connectDB();
  const allProducts = await Product.find();
  if (allProducts.length === 0) {
      res.status(404).json({
      message: "No products found"
    });
  }
  const products: any = [];
  for (const product of allProducts) {
    products.push({
      id: product._id,  
      name: product.name
    });
  }
  res.status(200).json({
    message: "All Products",
    products
  });
}


export const filterProducts = async (req: Request, res: Response) => {
  const filtros: any = req.query;
  await connectDB();
  if (!req.query) {
    const allproductos = await Product.find();
    if (allproductos.length === 0) {
      res.status(404).json({
        message: "products not found"
      })
    }
    res.status(200).json({
      message: "All Products",
      allproductos
    })
  }

  try {
    const productos = await Product.find(filtros);
    if (productos.length === 0) {
      res.status(404).json({
        message: "No se encontraron productos con esos filtros"
      });
    }
    res.status(200).json({
      message: "Productos encontrados",
      productos
    })
  } catch (error) {
    res.status(400).json({
      message: "error al filtrar pproductos",
      error: error
    })
  }
}
export const findById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await connectDB();
  const product = await Product.findById(id);
  if (!product) {
    res.status(404).json({
      message: "producto no encontrado"
    })
  }
  res.status(200).json({
    message: "Producto encontrado",
    product
  })
}

export const updateProduct = async (req: Request, res: Response) => {
  const updateData = req.body;
  const { id } = req.params;
  await connectDB();
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, updateData)
    if (!updateProduct) res.status(404).json({ message: 'producto no encontrado' })
    res.status(200).json({
      message: "Producto actualizado",
      updateProduct
    })
  } catch (error) {
    res.status(400).json({
      message: "error al actualizar el producto",
      error: error
    })
  }

}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await connectDB();
  const product = await Product.findByIdAndDelete(id);
  if (!product) res.status(404).json({ message: "producto no encontrado" })
  res.status(200).json({
    message: "product deleted",
    product
  })
}

// export const updateStock = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { stock } = req.body;
//     await connectDB();
//     await Product.updateOne({ _id: id }, { $set: { stock: stock } });
//     const update = await Product.find({ _id: id });

//     res.status(200).json({
//         message: "Stock actualizado",
//         update
//     });
// }
