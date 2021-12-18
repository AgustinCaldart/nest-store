import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Customer extends Document {
  @Prop({ required: true, index: true })
  name: string;

  /*Relacion uno a mucho embebido
 @Prop({
    type: [{ name: { type: String }, color: { type: String } }],
  })
  skills: Types.Array<Record<string, any>>; */
}
export const CustomerSchema = SchemaFactory.createForClass(Customer);
