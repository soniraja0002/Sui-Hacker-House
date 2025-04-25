import { Body, Controller, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { OrderServices } from 'src/services/order.services';

@Controller() 
export class OrderController {
  constructor(
    private readonly orderService: OrderServices) {}

  @Get('/order')
  async getorder() {
    try {
      return this.orderService.getorderData();
    } catch(err) {
      console.log(err);
    }
  }
}