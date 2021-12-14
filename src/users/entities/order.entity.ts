import { Product } from 'src/products/entities/entity.entity';
import { User } from './entity.entity';

export class Order {
  data: Date;
  user: User;
  products: Product[];
}
