import { IsString, IsInt } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';

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
}
