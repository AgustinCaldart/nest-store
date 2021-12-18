import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
  @Prop({ required: true, index: true })
  name: string;
}
export const CustomerSchema = SchemaFactory.createForClass(Customer);
