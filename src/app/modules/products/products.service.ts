import { TProduct } from './products.interface';
import { productModel } from './products.model';

const createProductFromDB = async (product: TProduct) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await productModel.find();
  return result;
};
const getSingleProductFromDB = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};
const updateSingleProductFromDB = async (
  id: string,
  updateProduct: Partial<TProduct>,
) => {
  const result = await productModel.findByIdAndUpdate(id, updateProduct, {
    new: true,
  });
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id);
  return result;
};

export const productservice = {
  createProductFromDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
};
