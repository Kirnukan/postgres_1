 import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('currencies')
export class CurrenciesEntity     {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({
    type: 'varchar',
    nullable: false
  })  
  symbol!: string;
}
