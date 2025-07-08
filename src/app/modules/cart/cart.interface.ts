import { ObjectId } from 'mongoose';

export type TCart = {
  productRef: ObjectId;
  quantity: number;
};
