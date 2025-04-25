import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "src/controllerr/customer.controller";
import { Customer } from "src/entities/Customer.entities";
import { CustomerService } from "src/services/customer.services";


@Module({
  imports:[TypeOrmModule.forFeature([Customer])],
  controllers:[CustomerController],
  providers:[CustomerService]
})
export class CustomerModule{

}