import { Request, Response } from 'express';
import { cartService } from './cart.service';

const createCart = async (req: Request, res: Response) => {
  try {
    const cart = req.body;

    const result = await cartService.createCartByBD(cart);
    res.status(200).json({
      success: true,
      message: 'Cart created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

const getAllCart = async (req: Request, res: Response) => {
  try {
    const result = await cartService.getAllCartByBD();
    res.status(200).json({
      success: true,
      message: 'all cart get successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

const getSingleCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await cartService.getSingleCartByBD(id);
    res.status(200).json({
      success: true,
      message: 'get sinngle cart successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

const updateSingleCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateCart = req.body;
    const result = await cartService.updateSingleCartByBD(id, updateCart);
    res.status(200).json({
      success: true,
      message: 'update sinngle cart successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

const deleteSingleCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await cartService.deleteSingleCartByBD(id);
    res.status(200).json({
      success: true,
      message: 'delete sinngle cart successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

export const cartController = {
  createCart,
  getAllCart,
  getSingleCart,
  updateSingleCart,
  deleteSingleCart,
};
