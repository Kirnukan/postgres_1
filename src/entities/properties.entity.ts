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
} from 'class-validator';



export enum propType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  COLOR = 'COLOR'
}

@Entity('properties')
export class PropertiesEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(1, 124)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  caption!: string;

  @Column({
    type: 'enum',
    enum: 'propType',
    nullable: false
  })  
  type!: propType;

  entityName: string = 'properties';
}
