import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "src/controllerr/product.controller";
import { Product } from "src/entities/Product.entities";
import { ProductServices } from "src/services/product.services";

@Module({
  imports:[TypeOrmModule.forFeature([Product])],
  controllers:[ProductController],
  providers:[ProductServices]
})
export class ProductModule{

}