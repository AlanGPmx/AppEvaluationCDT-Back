export interface Productos {
  id: number;
  name: string;
  price: number;
  withDiscount: number;
  description: string;
  categoryId: number;
  stock: number;
  img?: string;
  path?: string;
  options?: string;
  selected?: string;
}