import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getOrmConfig } from './config/typeorm';
import { ProductsEntity } from './entities/products.entity';

async function main() {
    const connection = await createConnection(getOrmConfig());
    await connection.runMigrations();


    const productRepository = connection.getRepository(ProductsEntity);

    await productRepository.save({
        name: 'New product from code',
        availableAmount: 100,
    });

    const [items, count] = await productRepository.findAndCount({
        skip: 10,
        take: 20
    });
    console.log(items.length, count);

    await connection.close();
}


main().then();


















