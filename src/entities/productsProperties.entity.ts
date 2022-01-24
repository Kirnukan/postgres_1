 import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { PropertiesEntity } from './properties.entity';
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


@Entity('products_properties')
export class ProductsPropertiesEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => ProductsEntity)
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })    
  product_id!: number;
  @OneToOne(() => PropertiesEntity)

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  property_id!: number;

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  value!: number;

  entityName: string = 'products_properties';
}
