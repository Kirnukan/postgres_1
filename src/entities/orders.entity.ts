 import { Column, Entity, OneToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { CustomersEntity } from './customers.entity';
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
  isDate,
} from 'class-validator';



export enum orderStatus {
  PREPARING = 'PREPARING',
  REGISTRATION = 'REGISTRATION',
  PAYING = 'PAYING'
}

@Entity('orders')
export class OrdersEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => CustomersEntity)
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  customer_id!: number;
  
  @Column({
    type: 'enum',
    enum: 'orderStatus',
    nullable: false
  })  
  status!: orderStatus;
  
  @IsDate()
  @Column({
    type: 'timestamp',
    nullable: false
  })  
  created_at!: string;
  
  @IsDate()
  @Column({
    type: 'timestamp',
    nullable: false
  })  
  updated_at!: string;

  entityName: string = 'orders';
}
