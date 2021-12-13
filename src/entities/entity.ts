export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock?: number;
  image?: string;
}
export class Category {
  id: number;
  name: string;
}
export class Brand {
  id: number;
  name: string;
}
export class User {
  id: number;
  name: string;
  password: string;
}
export class Customers {
  id: number;
  name: string;
}
