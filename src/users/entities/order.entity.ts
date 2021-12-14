import { Product } from 'src/products/entities/entity';
import { User } from './entity';

export class Order {
  data: Date;
  user: User;
  products: Product[];
}
