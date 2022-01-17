 import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AttachmentsEntity } from './attachments.entity';

@Entity('brands')
export class BrandsEntity     {
  @PrimaryGeneratedColumn()
  id!: number;
  
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
}
