import { Catch, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/DTO/product.dto';
import { UpdateProductDto } from 'src/DTO/updateProduct.dto';
import { Product } from 'src/entities/Product.entities';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class ProductServices {
  
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async getproducData() {
    try {
      return await this.productRepo.find();
    } catch (err) {
      console.log(err);
    }
  }

  async getproductId(id:string){
    try {
      return await this.productRepo.findOneBy({id:Equal(id)})
    } catch (err) {
      console.log(err);
    }
  }

  async saveProduct(body: CreateProductDto) {
    try{
      return await this.productRepo.save(body)
    }catch(err){
      console.log(err);
    }
  }

  async putproductByid(id: string, updatedProduct: UpdateProductDto) {
    try{
      const product = await this.productRepo.findOneBy({id:Equal(id)})
      if(!product){
        console.log("not found");
        return
      }
      const finalrompt = Object.assign(product,updatedProduct)
      return await this.productRepo.save(finalrompt)
    }catch(err){
      console.log(err);
    }
  }

 async deleteProduct(id: string) {
  try {
  const product = await this.productRepo.findOne({where:{id:Equal(id)}});
  if(!product){
    console.log("prduct not found");
    return 
  }
  const deleted = await this.productRepo.remove(product)
  if(deleted){
    return {messaage:"successfully deleted"}
  }  } catch(err) {
    console.log(err);
  }
}
}
