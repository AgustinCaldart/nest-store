import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';
@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ type: Number, required: true, index: true })
  price: number;
  @Prop({ type: Number })
  stock?: number;
  @Prop()
  image?: string;
  /*RELACION EMBEBIDA
  @Prop(
    raw({
      name: { type: String },
    }),
  )
  category: Record<string, any>; */

  //Referenciando brand
  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
//Se puede agregar {unique:true} para generar una llave unica entre dos campos
ProductSchema.index({ price: 1, stock: -1 });
