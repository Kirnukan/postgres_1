 import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { OrdersEntity } from './orders.entity';
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


@Entity('payments')
export class PaymentsEntity extends BaseClass   {
  @OneToOne(() => OrdersEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  order_id!: number;
  
  @Length(1, 100)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  kind!: string;

  entityName: string = 'payments';
}
