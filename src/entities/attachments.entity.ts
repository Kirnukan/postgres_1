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


@Entity('attachments')
export class AttachmentsEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(5, 32)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  name!: string;
  
  @Column({
    type: 'varchar',
    nullable: false
  })  
  file_path!: string;

  entityName: string = 'attachments';
}
