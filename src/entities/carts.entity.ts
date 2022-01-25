 import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { ProductsEntity } from './products.entity';
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
export class CartsEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => OrdersEntity)
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  order_id!: number;
  
  @OneToOne(() => ProductsEntity)

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
