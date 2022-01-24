 import { Column, Entity, OneToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { BrandsEntity } from './brands.entity';
import { CategoriesEntity } from './categories.entity';
import { CurrenciesEntity } from './currencies.entity';
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


@Entity('products')
export class ProductsEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(1, 100)
  @Column({
      type: 'varchar',
      nullable: false
  })
  name!: string;

  @IsInt()
  @Column({
      type: 'numeric',
      nullable: false,
      default: 0
  })
  availableAmount!: number | null;

  @Length(1, 128)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  caption!: string;

  @Length(1, 255)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  description!: string;

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  price!: number;

  @OneToOne(() => CategoriesEntity)

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  category_id!: number;

  @OneToOne(() => CurrenciesEntity)

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  currency_id!: number;

  @OneToOne(() => BrandsEntity)

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: true,
  })
  brand_id?: number;

  entityName: string = 'products';
}
