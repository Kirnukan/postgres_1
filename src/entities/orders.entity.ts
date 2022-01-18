 import { Column, Entity, OneToOne } from 'typeorm';
import { CustomersEntity } from './customers.entity';
import { BaseClass } from './BaseClass';


export enum orderStatus {
  PREPARING = 'PREPARING',
  REGISTRATION = 'REGISTRATION',
  PAYING = 'PAYING'
}

@Entity('orders')
export class OrdersEntity extends BaseClass   {
  @OneToOne(() => CustomersEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  customer_id!: number;
  
  @Column({
    type: 'enum',
    nullable: false
  })  
  status!: orderStatus;
  
  @Column({
    type: 'timestamp',
    nullable: false
  })  
  created_at!: string;
  
  @Column({
    type: 'timestamp',
    nullable: false
  })  
  updated_at!: string;

  entityName: string = 'orders';
}
