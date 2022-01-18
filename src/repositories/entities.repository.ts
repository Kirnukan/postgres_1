import { BrandsEntity } from "src/entities/brands.entity";
import { CartsEntity } from "src/entities/carts.entity";
import { CategoriesEntity } from "src/entities/categories.entity";
import { CurrenciesEntity } from "src/entities/currencies.entity";
import { CustomersEntity } from "src/entities/customers.entity";
import { OrdersEntity } from "src/entities/orders.entity";
import { PaymentsEntity } from "src/entities/payments.entity";
import { ProductsEntity } from "src/entities/products.entity";
import { ProductsPropertiesEntity } from "src/entities/productsProperties.entity";
import { ProductsImagesEntity } from "src/entities/productsImages.entity";
import { PropertiesEntity } from "src/entities/properties.entity";
import { Connection, Repository } from "typeorm";
import { AttachmentsEntity } from "src/entities/attachments.entity";


export class EntitiesRepository{
    private readonly connection: Connection;

    brandsRepository: Repository<BrandsEntity>;
    cartsRepository: Repository<CartsEntity>;
    categoriesRepository: Repository<CategoriesEntity>;
    currenciesRepository: Repository<CurrenciesEntity>;
    customersRepository: Repository<CustomersEntity>;
    ordersRepository: Repository<OrdersEntity>;
    paymentsRepository: Repository<PaymentsEntity>;
    productsRepository: Repository<ProductsEntity>;
    productsPropertiesRepository: Repository<ProductsPropertiesEntity>;
    productsImagesRepository: Repository<ProductsImagesEntity>;
    propertiesRepository: Repository<PropertiesEntity>;
    attachmentRepository: Repository<AttachmentsEntity>

    constructor(connection: Connection) {
        this.connection = connection;
        this.brandsRepository = this.connection.getRepository(BrandsEntity);
        this.cartsRepository = this.connection.getRepository(CartsEntity);
        this.categoriesRepository = this.connection.getRepository(CategoriesEntity);
        this.currenciesRepository = this.connection.getRepository(CurrenciesEntity);
        this.customersRepository = this.connection.getRepository(CustomersEntity);
        this.ordersRepository = this.connection.getRepository(OrdersEntity);
        this.paymentsRepository = this.connection.getRepository(PaymentsEntity);
        this.productsRepository = this.connection.getRepository(ProductsEntity);
        this.productsPropertiesRepository = this.connection.getRepository(ProductsPropertiesEntity);
        this.productsImagesRepository = this.connection.getRepository(ProductsImagesEntity);
        this.propertiesRepository = this.connection.getRepository(PropertiesEntity);
        this.attachmentRepository = this.connection.getRepository(AttachmentsEntity);
    }

}
