import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
export class Product {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  withDiscount: number;

  @Column()
  description: string;

  @Column()
  categoryId: number;

  @Column()
  stock: number;

  @Column()
  img: string;

  @Column()
  options: string;

}
