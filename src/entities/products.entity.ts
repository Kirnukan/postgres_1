 import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { BrandsEntity } from './brands.entity';
import { CategoriesEntity } from './categories.entity';
import { CurrenciesEntity } from './currencies.entity';

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column({
      type: 'varchar',
      nullable: false
  })
  name!: string;

  @Column({
      type: 'numeric',
      nullable: false,
      default: 0
  })
  availableAmount!: number | null;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  caption!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description!: string;

  @Column({
    type: 'numeric',
    nullable: false,
  })
  price!: number;

  @OneToOne(() => CategoriesEntity)
  @Column({
    type: 'numeric',
    nullable: false,
  })
  category_id!: number;

  @OneToOne(() => CurrenciesEntity)
  @Column({
    type: 'numeric',
    nullable: false,
  })
  currency_id!: number;

  @OneToOne(() => BrandsEntity)
  @Column({
    type: 'numeric',
    nullable: true,
  })
  brand_id?: number;

}
