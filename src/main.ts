import 'reflect-metadata';
import { createConnection } from 'typeorm';
import {getOrmConfig} from './config/typeorm';
import {ProductEntity} from './entities/product.entity';

async function main() {
    const connection = await createConnection(getOrmConfig());
    await connection.runMigrations();


    const productRepo = connection.getRepository(ProductEntity);

    await productRepo.save({
        name: 'New product from code',
        availableAmount: 100,
    });

    const [items, count] = await productRepo.findAndCount({
        skip: 10,
        take: 20
    });
    console.log(items.length, count);

    await connection.close();
}


main().then();


















