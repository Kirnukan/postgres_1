import { Column, Entity } from 'typeorm';
import { BaseClass } from './BaseClass';


export enum propType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  COLOR = 'COLOR'
}

@Entity('properties')
export class PropertiesEntity extends BaseClass   {
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

  entityName: string = 'properties';
}
