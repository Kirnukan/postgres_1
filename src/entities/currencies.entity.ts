 import { Column, Entity } from 'typeorm';
 import { BaseClass } from './BaseClass';

@Entity('currencies')
export class CurrenciesEntity extends BaseClass   {
  @Column({
    type: 'varchar',
    nullable: false
  })  
  symbol!: string;

  entityName: string = 'currencies';
}
