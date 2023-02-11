import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandSalesModule } from './brand_sales/brand_sales.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath :'.env',
      isGlobal : true
    }),
    //connecting with mongodb
    MongooseModule.forRoot(process.env.DB_URI),
    BrandSalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
