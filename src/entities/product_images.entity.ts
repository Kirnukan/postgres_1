 import { Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
 import { AttachmentsEntity } from './attachments.entity';

@Entity('product_images')
export class ProductImagesEntity     {
  @PrimaryGeneratedColumn()
  id!: number;

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
}
