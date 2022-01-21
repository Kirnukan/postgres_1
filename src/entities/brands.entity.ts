import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { AttachmentsEntity } from './attachments.entity';
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

@Entity('brands')
export class BrandsEntity extends BaseClass   {
  @Length(5, 132)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  caption!: string;
  
  @OneToOne(() => AttachmentsEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  logo_attachment_id!: number;

  entityName: string = 'brands';
}
