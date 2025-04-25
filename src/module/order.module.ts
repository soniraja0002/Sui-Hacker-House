import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "src/controllerr/order.controller";
import { Orders } from "src/entities/Order.entities";
import { OrderServices } from "src/services/order.services";

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  controllers: [OrderController],
   exports:[],
   providers:[OrderServices]
})
export class OrderModule{
  
}

