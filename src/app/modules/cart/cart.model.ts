import { model, Schema } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new Schema<TCart>(
  {
    productRef: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number },
  },
  {
    timestamps: true,
  },
);

export const cartModel = model<TCart>('cart', cartSchema);
