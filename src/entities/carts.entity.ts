 import { Column, Entity, OneToOne } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { ProductsEntity } from './products.entity';
import { BaseClass } from './BaseClass';

@Entity('carts')
export class CartsEntity extends BaseClass   {
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

  entityName: string = 'carts';
}
