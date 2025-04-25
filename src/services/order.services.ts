import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Orders } from "src/entities/Order.entities";
import { Repository } from "typeorm";

@Injectable() 
export class OrderServices{

  // private orderData = []

  constructor(
      @InjectRepository(Orders)
      private readonly orderRepo: Repository<Orders>,
    ) {}


  
  async getorderData() {
    try {
      return await this.orderRepo.find({
        relations: { customer: true },
        order: {
          createdAt: 'DESC', 
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  

}