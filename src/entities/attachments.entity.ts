 import { Column, Entity } from 'typeorm';
import { BaseClass } from './BaseClass';

@Entity('attachments')
export class AttachmentsEntity extends BaseClass{
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
