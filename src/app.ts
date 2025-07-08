import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoute } from './app/modules/products/products.route';
import { cartRoutes } from './app/modules/cart/cart.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/product', productRoute);
app.use('/api/v1/cart', cartRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('simple server for mini ecommerce for job task for qtecsolution');
});

export default app;
