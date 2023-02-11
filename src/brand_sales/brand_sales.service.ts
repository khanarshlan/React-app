import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import { brand_sales } from './schemas/brand_sales_schema';

@Injectable()
export class BrandSalesService {
  //here we are injecting our model so that we can use this and get the data from database
  constructor(
    @InjectModel(brand_sales.name)
    private brand_sales: mongoose.Model<brand_sales>,
  ) {}

  //get all

  async findAll(): Promise<brand_sales[]> {
    const brand_sales = await this.brand_sales.find();
    return brand_sales;
  }

  //cretae

  //this will create the brand_sales and save it into the database

  //we will get this brand_sale from the body of the request
  async create(brand_sales: brand_sales): Promise<brand_sales> {
    //this create is a mongoose function , this will create and returnn back
    const res = await this.brand_sales.create(brand_sales);
    return res;
  }

  //get by Id

  async findById(id: string): Promise<brand_sales> {
    const brand_sales = await this.brand_sales.findById(id);
    if (!brand_sales) {
      throw new NotFoundException('Book not found');
    }
    return brand_sales;
  }

  //update

  async updateById(id: string, brand_sale: brand_sales): Promise<brand_sales> {
    return await this.brand_sales.findByIdAndUpdate(id, brand_sale, {
      new: true, //This option is used to return the updated document instead of the original document.
      runValidators: true, //This option is used to enforce Mongoose's validation rules during the update operation
    });
  }

  //delete

  async deleteById(id: string): Promise<brand_sales> {
    return await this.brand_sales.findByIdAndDelete(id);
  }
}
