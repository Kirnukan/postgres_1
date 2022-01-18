 import { Column, Entity, OneToOne } from 'typeorm';
import { BrandsEntity } from './brands.entity';
import { CategoriesEntity } from './categories.entity';
import { CurrenciesEntity } from './currencies.entity';
import { BaseClass } from './BaseClass';

@Entity('products')
export class ProductsEntity extends BaseClass{
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

  entityName: string = 'products';
}
