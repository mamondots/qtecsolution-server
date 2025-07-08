import { model, Schema } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    mrpPrice: { type: Number },

    image: { type: String, required: true },

    size: { type: [String], default: [] },
    quintity: { type: Number, default: 0 },
    sku: { type: String },

    availability: {
      type: String,
      enum: ['in_stock', 'out_of_stock', 'pre_order'],
      default: 'in_stock',
    },
    labels: {
      type: String,
      enum: ['New', 'Best Seller', 'Limited Stock', 'Sale', 'Featured'],
    },
  },
  {
    timestamps: true,
  },
);

export const productModel = model<TProduct>('product', productSchema);
