import { Field, Int, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class ItemTypeDto {
  @Field({ nullable: true, description: 'Title of the item' })
  @IsString()
  readonly title: string;

  @Field({ nullable: true, description: 'price of the item' })
  readonly price: number;

  @Field({ nullable: false, description: 'price of the item' })
  readonly description: string;
}
