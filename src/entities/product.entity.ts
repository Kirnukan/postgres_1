import {EntityInterface} from "../interfaces/entity.interface";

export class ProductEntity implements EntityInterface {
    id!: string;

    readonly entityName!: string;
}


