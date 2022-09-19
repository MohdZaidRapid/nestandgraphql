import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt } from 'class-validator';

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
  @IsInt()
  readonly price: number;

  @Field({ nullable: true, description: 'description of the item' })
  @IsString()
  readonly description: string;

  @Field(() => User, { nullable: true, description: 'enter user value' })
  @IsString()
  readonly user: User;
}
