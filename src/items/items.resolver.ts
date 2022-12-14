import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemTypeDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { ItemDef, ProductDef } from './typeDef/item-type';

import { Item } from './iterfaces/item.interface';
import { ProductDto } from './dto/product.dto';

@Resolver()
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation((returns) => ProductDef)
  async createPro(@Args('inpu') productDto: ProductDto): Promise<ProductDef> {
    return this.itemsService.createProduct(productDto);
  }

  @Query((returns) => [ItemDef])
  async items(): Promise<ItemDef[]> {
    return this.itemsService.findAll();
  }

  @Mutation((returns) => ItemDef)
  async createItem(@Args('inputs') ItemTypeDto: ItemTypeDto): Promise<ItemDef> {
    return this.itemsService.create(ItemTypeDto);
  }

  @Mutation((returns) => ItemDef)
  async updateItem(@Args('id') id: string, @Args('input') input: ItemTypeDto) {
    return this.itemsService.update(id, input as Item);
  }

  @Mutation((returns) => ItemDef)
  async deleteItem(@Args('id') id: string) {
    return this.itemsService.delete(id);
  }

  @Query((returns) => String)
  async hello() {
    return 'hello';
  }
}
