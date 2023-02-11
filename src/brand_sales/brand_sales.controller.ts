import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BrandSalesService } from './brand_sales.service';
import { brand_sales } from './schemas/brand_sales_schema';

@Controller('api/v1/brand_sales_daily')
export class BrandSalesController {

constructor(private brandSalesService : BrandSalesService){}

@Get()
async getAllbrandSales(): Promise<brand_sales[]>{
    return this.brandSalesService.findAll()
}

@Post()
async createBrand_sales(
    //@Body = to get the body from the request
    @Body()
    brand_sales,
):Promise<brand_sales>{
    return this.brandSalesService.create(brand_sales)
}

@Get(':id')
async getBrandSales(
    @Param('id')
    id : string,
): Promise<brand_sales>{
    return this.brandSalesService.findById(id)
}


@Put(':id')
async updateBrand_sales(
    @Param('id')
    id : string,
    @Body()
    brand_sales,
):Promise<brand_sales>{
    return this.brandSalesService.updateById(id,brand_sales)
}


@Delete(':id')
async deleteBrandSales(
    @Param('id')
    id : string,
): Promise<brand_sales>{
    return this.brandSalesService.deleteById(id)
}



}
