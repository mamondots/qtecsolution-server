import express from 'express';
import { productController } from './products.container';

const router = express.Router();

router.post('/create-product', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getSingleProducts);
router.put('/:id', productController.updateSingleProduct);
router.delete('/:id', productController.deleteSingleProduct);

export const productRoute = router;
