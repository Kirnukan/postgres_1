 import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  IsCurrency,
} from 'class-validator';


@Entity('currencies')
export class CurrenciesEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(1, 10)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  symbol!: string;
}
