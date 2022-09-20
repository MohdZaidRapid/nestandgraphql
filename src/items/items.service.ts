import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemTypeDto } from './dto/create-item.dto';
import { ItemDef, ProductDef } from './typeDef/item-type';
import { Item } from './iterfaces/item.interface';
import { ProductDto } from './dto/product.dto';
import { Product } from './iterfaces/product.interface';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private itemModel: Model<Item>,
    @InjectModel('product') private productModel: Model<Product>,
  ) {}

  async createProduct(creatProductDto: ProductDto): Promise<ProductDef> {
    const createpro = new this.productModel(creatProductDto);

    return await createpro.save();
  }

  async create(createItemDto: ItemTypeDto): Promise<ItemDef> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async findAll(): Promise<ItemDef[]> {
    return await this.itemModel.find().populate('productTitle').exec();
  }

  async findOne(id: string): Promise<ItemDef> {
    return await this.itemModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<ItemDef> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<ItemDef> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
