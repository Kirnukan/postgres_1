 import { Column, Entity, OneToOne } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { PropertiesEntity } from './properties.entity';
import { BaseClass } from './BaseClass';

@Entity('product_properties')
export class ProductPropertiesEntity extends BaseClass   {
  @OneToOne(() => ProductsEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })    
  product_id!: number;
  @OneToOne(() => PropertiesEntity)
  @Column({
    type: 'numeric',
    nullable: false
  })  
  property_id!: number;

  @Column({
    type: 'numeric',
    nullable: false
  })  
  value!: number;

  entityName: string = 'product_properties';
}
