import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseClass {
    @PrimaryGeneratedColumn()
    id!: number;

    abstract entityName: string;
}
