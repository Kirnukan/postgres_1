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
} from 'class-validator';



export enum propType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  COLOR = 'COLOR'
}

@Entity('properties')
export class PropertiesEntity extends BaseClass   {
  @Length(1, 124)
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
