import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/products/entities/entity.entity';
import { Customer } from './customer.entity';
import { User } from './entity.entity';

@Schema()
export class Order extends Document {
  @Prop({ type: Date })
  data: Date;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  user: User | Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }] })
  products: Types.Array<Product>;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
