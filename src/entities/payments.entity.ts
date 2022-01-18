 import { Column, Entity, OneToOne } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { BaseClass } from './BaseClass';

@Entity('payments')
export class PaymentsEntity extends BaseClass   {
  @OneToOne(() => OrdersEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  order_id!: number;
  
  @Column({
    type: 'varchar',
    nullable: false
  })  
  kind!: string;

  entityName: string = 'payments';
}
