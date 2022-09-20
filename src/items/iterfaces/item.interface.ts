import { Document } from 'mongoose';

export interface Item extends Document {
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly user: User;
  readonly productTitle: any;
}

export interface User {
  name: string;
  age: string;
}
