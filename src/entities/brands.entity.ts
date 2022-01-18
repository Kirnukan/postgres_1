import { Column, Entity, OneToOne } from 'typeorm';
import { AttachmentsEntity } from './attachments.entity';
import { BaseClass } from './BaseClass';

@Entity('brands')
export class BrandsEntity extends BaseClass   {
  @Column({
    type: 'varchar',
    nullable: false
  })  
  caption!: string;
  
  @OneToOne(() => AttachmentsEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  logo_attachment_id!: number;

  entityName: string = 'brands';
}
