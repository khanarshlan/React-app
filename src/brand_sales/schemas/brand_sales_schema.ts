import { Type } from "@nestjs/common";
import { Prop,Schema ,SchemaFactory} from "@nestjs/mongoose";

import { Mongoose } from "mongoose";
@Schema({
    timestamps : true
})

export class brand_sales{

    // @Prop()
    // _id: Mongoose["Schema"].Types.ObjectId;
  
    @Prop()
    date: Date;
  
    @Prop()
    brand: string;
  
    @Prop()
    transactionType: string;
  
    @Prop()
    totalOrders: number;
  
    @Prop()
    totalOrderValue: number;
  
    @Prop()
    grossMarginPercentage: number;
  
    @Prop()
    createdAt: Date;
  
    @Prop()
    updatedAt: Date;
  
    @Prop()
    __v: number;
  }
    

export const brand_sales_schema = SchemaFactory.createForClass(brand_sales);