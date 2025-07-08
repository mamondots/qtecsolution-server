import { Request, Response } from 'express';
import { productservice } from './products.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productservice.createProductFromDB(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productservice.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error,
    });
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await productservice.getSingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateProduct = req.body;
    const result = await productservice.updateSingleProductFromDB(
      id,
      updateProduct,
    );
    res.status(200).json({
      success: true,
      message: 'Product data update successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await productservice.deleteSingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Product delete successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  updateSingleProduct,
  deleteSingleProduct,
};
