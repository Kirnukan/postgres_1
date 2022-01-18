 import { Column, Entity } from 'typeorm';
 import { BaseClass } from './BaseClass';

@Entity('customers')
export class CustomersEntity extends BaseClass   {
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

  entityName: string = 'customers';
}
