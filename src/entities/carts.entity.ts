 import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { ProductsEntity } from './products.entity';

@Entity('carts')
export class CartsEntity     {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @OneToOne(() => OrdersEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  order_id!: number;
  
  @OneToOne(() => ProductsEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  product_id!: number;
  
  @Column({
    type: 'numeric',
    nullable: false
  })  
  amount!: number;
}
