import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    name!: string;

    @Column({
        type: 'int',
        nullable: false,
        default: 0
    })
    availableAmount!: number | null;

}
