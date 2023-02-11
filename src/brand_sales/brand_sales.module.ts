import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BrandSalesController } from './brand_sales.controller';
import { BrandSalesService } from './brand_sales.service';
import { brand_sales_schema } from './schemas/brand_sales_schema';

@Module({
  imports :[MongooseModule.forFeature([{name :'brand_sales',schema:brand_sales_schema}])],
  controllers: [BrandSalesController],
  providers: [BrandSalesService]
})
export class BrandSalesModule {}
