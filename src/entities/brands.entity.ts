import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { AttachmentsEntity } from './attachments.entity';
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
export class BrandsEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(5, 132)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  caption!: string;
  
  @OneToOne(() => AttachmentsEntity)
  @IsInt()
  @JoinColumn()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  logoAttachment_id!: number;
}
