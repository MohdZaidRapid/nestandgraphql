import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './Schemas/item.schema';
import { productSchema } from './Schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Item', schema: ItemSchema },
      { name: 'product', schema: productSchema },
    ]),
  ],
  providers: [ItemsService, ItemsResolver],
})
export class ItemsModule {}
