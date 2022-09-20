import * as mongoose from 'mongoose';
import { Product } from '../iterfaces/product.interface';

export const productSchema = new mongoose.Schema<Product>({
  title: String,
  //   item: { type: mongoose.Schema.Types.ObjectId, ref: 'item' },
});
