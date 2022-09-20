import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class ProductDto {
  @Field({ nullable: true, description: 'Title of the product' })
  @IsString()
  readonly title: string;
}
