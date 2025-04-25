import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/entities/Customer.entities";
import { Repository } from "typeorm";

@Injectable()
export class CustomerService{

  constructor(
      @InjectRepository(Customer)
      private readonly customerRepo: Repository<Customer>,
    ) {}
  
    async getcustomerData() {
      try {
        return await this.customerRepo.find();
      } catch (err) {
        console.log(err);
      }
    }

  
  
}