 import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { BaseClass } from './BaseClass';

@Entity('categories')
export class CategoriesEntity extends BaseClass   {
  @Column({
    type: 'varchar',
    nullable: false
  })  
  caption!: string;
  
  @Column({
    type: 'numeric',
    nullable: false
  })  
  rank!: number;

  @OneToOne(() => ProductsEntity)
  @Column({
    type: 'numeric',
    nullable: true
  })  
  parent_category_id?: number;

  entityName: string = 'categories';
}
