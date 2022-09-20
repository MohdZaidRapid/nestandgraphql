import { IsString, IsInt } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';
import { Optional } from '@nestjs/common';

@ObjectType()
export class Users {
  @Field({ nullable: true, description: 'enter user name' })
  @IsString()
  name: string;

  @Field({ nullable: true, description: 'Enter user age' })
  @IsString()
  age: string;
}

@ObjectType()
export class ProductDef {
  @Field({ nullable: true, description: 'Tells about id of user' })
  readonly _id: string;

  @Field({ nullable: true, description: 'tells about title of the item' })
  @IsString()
  readonly title: string;
}

@ObjectType()
export class ItemDef {
  @Field({ nullable: true, description: 'Tells about id of user' })
  _id: string;

  @Field({ nullable: true, description: 'tells about title of the item' })
  @IsString()
  readonly title: string;

  @Field({ nullable: true, description: 'tells about price of the item' })
  @IsInt()
  readonly price: number;

  @Field({ nullable: true, description: 'tells about description of the item' })
  @IsString()
  readonly description: string;

  @Field({ nullable: true, description: 'here' })
  readonly user: Users;

  @Field(() => ProductDef, { nullable: true, description: 'product id' })
  @Optional()
  readonly productTitle: ProductDef;
}
