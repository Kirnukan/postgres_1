 import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
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


@Entity('products_images')
export class ProductsImagesEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => AttachmentsEntity)
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  original_attachment_id!: number;
  
  @ManyToOne(() => AttachmentsEntity)
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  small_attachment_id!: number;
  
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  range!: number;

  entityName: string = 'products_images';
}
