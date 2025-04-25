import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  IsEnum,
  IsUrl,
} from 'class-validator';
import { Size } from 'src/entities/Product.entities';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  productName?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  price?: string;

  @IsOptional()
  @IsNumber()
  stock?: number;

  @IsOptional()
  @IsString()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  videoLink?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(Size, { each: true })
  size?: Size[];

  @IsOptional()
  @IsString()
  color?: string;
}
