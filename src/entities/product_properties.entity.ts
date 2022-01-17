 import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { PropertiesEntity } from './properties.entity';

@Entity('product_properties')
export class ProductPropertiesEntity     {
  @PrimaryGeneratedColumn()
  id!: number;
  
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
}
