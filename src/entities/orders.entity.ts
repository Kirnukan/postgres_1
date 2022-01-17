 import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomersEntity } from './customers.entity';


export enum orderStatus {
  PREPARING = 'PREPARING',
  REGISTRATION = 'REGISTRATION',
  PAYING = 'PAYING'
}

@Entity('orders')
export class OrdersEntity     {
  @PrimaryGeneratedColumn()
  id!: number;
    
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
}
