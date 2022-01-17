 import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class CustomersEntity     {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({
    type: 'varchar',
    nullable: false
  })  
  email!: string;
  
  @Column({
    type: 'numeric',
    nullable: false
  })  
  phone!: number;
  
  @Column({
    type: 'varchar',
    nullable: false
  })  
  first_name!: string;
  
  @Column({
    type: 'varchar',
    nullable: false
  })  
  last_name!: string;
}
