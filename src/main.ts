import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getOrmConfig } from './config/typeorm';
import { ProductsEntity } from './entities/products.entity';
import { dataProviderFactory } from './providers/dataProvider.factory';
import { router } from './server';

async function main() {
    const PostgresProvider = dataProviderFactory();
    router(PostgresProvider)
    const connection = await createConnection(getOrmConfig());
    await connection.runMigrations();

    const productsRepository = connection.getRepository(ProductsEntity);

    await productsRepository.save({
        name: 'New product from code',
        availableAmount: 100,
    });

    const [items, count] = await productsRepository.findAndCount({
        skip: 10,
        take: 20
    });
    console.log(items.length, count);

    await connection.close();
}


main().then();


















