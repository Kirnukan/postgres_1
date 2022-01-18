 import { Column, Entity } from 'typeorm';
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
  IsCurrency,
} from 'class-validator';


@Entity('currencies')
export class CurrenciesEntity extends BaseClass   {
  @Length(1, 10)
  @IsCurrency()
  @Column({
    type: 'varchar',
    nullable: false
  })  
  symbol!: string;

  entityName: string = 'currencies';
}
