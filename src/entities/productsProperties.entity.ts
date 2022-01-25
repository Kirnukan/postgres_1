 import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
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
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })    
  productId!: number;

  @OneToOne(() => PropertiesEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  propertyId!: number;

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  value!: number;
}
