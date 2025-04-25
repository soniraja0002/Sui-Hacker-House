import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from 'src/services/customer.services';

@Controller() 
export class CustomerController {
  
  constructor(private readonly customerService: CustomerService) {}


  @Get('/customer')
  async getcustomer() {
    return this.customerService.getcustomerData();
  }

  
}