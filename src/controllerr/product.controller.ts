import { Body, Controller, Delete, Get, Param, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from 'src/DTO/product.dto';
import { UpdateProductDto } from 'src/DTO/updateProduct.dto';
import { ProductServices } from 'src/services/product.services';


@Controller()
export class ProductController {
  constructor(private readonly productService: ProductServices) {}

  @Get('/product')
  async getproduct() {
    try {
      return this.productService.getproducData();
    } catch(err) {
      console.log(err);
    }
  }

  @Get('/product/:id')
  async getproductByid(@Param('id') id:string) {
    try {
      console.log(id);
      return this.productService.getproductId(id);
    } catch(err) {
      console.log(err);
    }
  }

  @Post('/product')
  async postProduct(@Body(new ValidationPipe()) createDto:CreateProductDto ) {
    try {
    console.log("Body :",createDto);

    const product = this.productService.saveProduct(createDto);


      return {
        message:"Product created successfully",
        product
      }
    } catch (err) {
      console.log(err);
      return {
        message: "Failed to create product"
      }
    }


  }

 


  @Patch('/product/:id')
  async updateProductbyid(@Param('id') id: string, @Body(new ValidationPipe()) updateProduct:UpdateProductDto ) {
    try {
      console.log(id);
      const result = this.productService.putproductByid(id, updateProduct);
  
      return {
        message: 'Product updated successfully',
        product: result,
      };
    } catch (err) {
      console.log(err);
      return {
        message: "Failed to update product"
      }
  
      
    }
  }

  @Delete('/product')
  async deleteproduct(@Param('id') id:string){
    try {
      await this.productService.deleteProduct(id);
    } catch(err) {
      console.log(err);
    }
  }
  
}
