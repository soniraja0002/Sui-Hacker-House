import { Module } from '@nestjs/common';
import { ProductModule } from './module/product.module';
import { CustomerModule } from './module/customer.module';
import { OrderModule } from './module/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Customer } from './entities/Customer.entities';
import { AiMessages } from './entities/AiMessages.entities';
import { CustomerMessages } from './entities/CustomerMessages.entities';
import { Orders } from './entities/Order.entities';
import { OrderItem } from './entities/OrderItem.entities';
import { Payment } from './entities/Payment.entities';
import { Product } from './entities/Product.entities';
import { Shipping } from './entities/Shipping.entities';
import { Attachments } from './entities/attachment.entities';
import { Payload } from './entities/payload.entities';
import { BusinessDetails } from './entities/business.entities';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}) ,
    TypeOrmModule.forRootAsync({
      useFactory:(config:ConfigService)=>({
        type:"mysql",
        database:config.get('DB_DATABASE'),
        password:config.get("DB_PASSWORD"),
        username:config.get('DB_USERNAME'),
        host:config.get('DB_HOST'),
        port:+config.get('DB_PORT'),
        entities:[
          Customer,
          AiMessages,
          CustomerMessages,
          Orders,
          OrderItem,
          Payment,
          Product,
          Shipping,
          Attachments,
          Payload,
          BusinessDetails
        ],
        synchronize:true
      }),
      inject:[ConfigService]
    }),
    TypeOrmModule.forFeature([
      Customer,
      AiMessages,
      CustomerMessages,
      Orders,
      OrderItem,
      Payment,
      Product,
      Shipping,
      Attachments,
      Payload,
      BusinessDetails
    ]),
    ProductModule,
     OrderModule,
      CustomerModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {

}