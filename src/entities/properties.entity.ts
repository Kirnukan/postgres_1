import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export enum propType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  COLOR = 'COLOR'
}

@Entity('products')
export class PropertiesEntity     {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false
  })  
  caption!: string;

  @Column({
    type: 'enum',
    nullable: false
  })  
  type!: propType;
}
