import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getOrmConfig } from './config/typeorm';
import { ProductsEntity } from './entities/products.entity';
import { PostgresDataProvider } from './providers/postgresDataProvider';
import { EntitiesRepository } from './repositories/entities.repository';
import { router } from './server';

async function main() {
    const connection = await createConnection(getOrmConfig());
    const entitiesRepository = new EntitiesRepository(connection)
    await connection.runMigrations();
    const productRepository = entitiesRepository.productsRepository;
    const orderRepository = entitiesRepository.ordersRepository;
    const attachmentRepository = entitiesRepository.attachmentRepository;
    const brandRepository = entitiesRepository.brandsRepository;
    const cartRepository = entitiesRepository.cartsRepository;
    const categoryRepository = entitiesRepository.categoriesRepository;
    const currencyRepository = entitiesRepository.currenciesRepository;
    const customerRepository = entitiesRepository.customersRepository;
    const paymentRepository = entitiesRepository.paymentsRepository;
    const productImagesRepository = entitiesRepository.productsImagesRepository;
    const productPropertiesRepository = entitiesRepository.productsPropertiesRepository;
    const propertyRepository = entitiesRepository.propertiesRepository;



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


















