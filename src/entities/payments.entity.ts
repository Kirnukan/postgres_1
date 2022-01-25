 import { Column, Entity, OneToOne, PrimaryGeneratedColumn, BaseEntity, JoinColumn } from 'typeorm';
import { OrdersEntity } from './orders.entity';
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
export class PaymentsEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

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
}
