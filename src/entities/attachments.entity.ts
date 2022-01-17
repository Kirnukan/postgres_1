 import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('attachments')
export class AttachmentsEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  
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
}
