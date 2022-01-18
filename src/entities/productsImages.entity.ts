 import { Column, Entity, ManyToOne} from 'typeorm';
 import { AttachmentsEntity } from './attachments.entity';
 import { BaseClass } from './BaseClass';

@Entity('products_images')
export class ProductsImagesEntity extends BaseClass   {
  @ManyToOne(() => AttachmentsEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  original_attachment_id!: number;
  
  @ManyToOne(() => AttachmentsEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  small_attachment_id!: number;
  
  @Column({
    type: 'numeric',
    nullable: false
  })  
  range!: number;

  entityName: string = 'products_images';
}
