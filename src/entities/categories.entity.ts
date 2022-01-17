 import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ProductsEntity } from './products.entity';

@Entity('categories')
export class CategoriesEntity     {
  @PrimaryGeneratedColumn()
  id!: number;

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
}
