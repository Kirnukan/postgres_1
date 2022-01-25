 import { Column, Entity, OneToOne, PrimaryGeneratedColumn, BaseEntity, JoinColumn } from 'typeorm';
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
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  customerId!: number;
  
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
  createdAt!: string;
  
  @IsDate()
  @Column({
    type: 'timestamp',
    nullable: false
  })  
  updatedAt!: string;
}
