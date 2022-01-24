 import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  IsPhoneNumber,
} from 'class-validator';


@Entity('customers')
export class CustomersEntity extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(8, 64)
  @IsEmail()
  @Column({
    type: 'varchar',
    nullable: false
  })  
  email!: string;

  @IsPhoneNumber()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  phone!: number;
  
  @Length(1, 64)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  first_name!: string;
  
  @Length(1, 64)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  last_name!: string;

  entityName: string = 'customers';
}
