import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  IsEnum,
  ArrayNotEmpty,
  IsUrl,
} from 'class-validator';
import { Size } from 'src/entities/Product.entities';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsNumber()
  stock: number;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  videoLink?: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(Size, { each: true })
  size: Size[];

  @IsString()
  @IsNotEmpty()
  color: string;
}
