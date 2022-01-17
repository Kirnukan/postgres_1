 import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrdersEntity } from './orders.entity';

@Entity('payments')
export class PaymentsEntity     {
  @PrimaryGeneratedColumn()
  id!: number;
  
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
}
