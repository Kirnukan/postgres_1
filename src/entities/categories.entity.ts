 import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
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


@Entity('categories')
export class CategoriesEntity extends BaseEntity   {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(5, 132)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  caption!: string;
  
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false
  })  
  rank!: number;

  @ManyToOne(() => CategoriesEntity)
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: true
  })  
  parentCategoryId!: number;
}
