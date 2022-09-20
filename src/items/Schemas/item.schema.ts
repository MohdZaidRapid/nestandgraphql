import * as mongoose from 'mongoose';
import { Item } from '../iterfaces/item.interface'

export const ItemSchema = new mongoose.Schema<Item>({
  title: String,
  price: Number,
  description: String,
  user: {
    name: {
      type: String,
      default: null,
    },
    age: {
      type: String,
      default: null,
    },
  },
  productTitle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
});
