import { Field, Int, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class User {
  @Field({ nullable: true, description: 'Enter details of user' })
  @IsString()
  readonly name: string;

  @Field({ nullable: true, description: 'Enter details of user' })
  @IsString()
  readonly age: string;
}

@InputType()
export class ItemTypeDto {
  @Field({ nullable: true, description: 'Title of the item' })
  @IsString()
  readonly title: string;

  @Field({ nullable: true, description: 'price of the item' })
  readonly price: number;

  @Field({ nullable: false, description: 'price of the item' })
  readonly description: string;

  @Field({ nullable: true, description: 'enter user value' })
  readonly user: User;
}
