 import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { ProductsEntity } from './products.entity';
import { BaseClass } from './BaseClass';
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

@Entity('carts')
export class CartsEntity extends BaseClass   {
  @OneToOne(() => OrdersEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  order_id!: number;
  
  @OneToOne(() => ProductsEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  product_id!: number;
  
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
    default: 0
  })  
  amount!: number | null;

  entityName: string = 'carts';
}
