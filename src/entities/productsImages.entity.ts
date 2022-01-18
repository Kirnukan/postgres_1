 import { Column, Entity, ManyToOne} from 'typeorm';
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


@Entity('products_images')
export class ProductsImagesEntity extends BaseClass   {
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
