import { EMethod } from '../interfaces/listener.interface';

import { ExpressServer } from '../server';

import { AttachmentsController } from '../controllers/attachment.controller';
import { BrandsController } from '../controllers/brand.controller';
import { CartsController } from '../controllers/cart.controller';
import { CategoriesController } from '../controllers/category.controller';
import { CurrenciesController } from '../controllers/currency.controller';
import { CustomersController } from '../controllers/customer.controller';
import { OrdersController } from '../controllers/order.controller';
import { PaymentsController } from '../controllers/payment.controller';
import { ProductsController } from '../controllers/product.controller';
import { ProductImagesController } from '../controllers/productImages.controller';
import { ProductPropertiesController } from '../controllers/productProperties.controller';
import { PropertiesController } from '../controllers/property.controller';

import { AttachmentsService } from '../services/attachments.service';
import { BrandsService } from '../services/brands.service';
import { CartsService } from '../services/carts.service';
import { CategoriesService } from '../services/categories.service';
import { CurrenciesService } from '../services/currencies.service';
import { CustomersService } from '../services/customers.service';
import { OrdersService } from '../services/orders.service';
import { PaymentsService } from '../services/payments.service';
import { ProductImagesService } from '../services/productImages.service';
import { ProductPropertiesService } from '../services/productProperties.service';
import { ProductsService } from '../services/products.service';
import { PropertiesService } from '../services/properties.service';


export async function router (expressServer: ExpressServer) {
    if(!expressServer.connection) {
        throw 'Have not connection';
    }
    const connection = expressServer.connection;

    const entityServices = {
        attachmentsService: new AttachmentsService(connection),
        brandsService: new BrandsService(connection),
        cartsService: new CartsService(connection),
        categoriesService: new CategoriesService(connection),
        currenciesService: new CurrenciesService(connection),
        customersService: new CustomersService(connection),
        ordersService: new OrdersService(connection),
        paymentsService: new PaymentsService(connection),
        productImagesService: new ProductImagesService(connection),
        productPropertiesService: new ProductPropertiesService(connection),
        productsService: new ProductsService(connection),
        propertiesService: new PropertiesService(connection)
    };

    const entityControllers = {
        attachmentsController: new AttachmentsController(entityServices.attachmentsService),
        brandsController: new BrandsController(entityServices.brandsService),
        cartsController: new CartsController(entityServices.cartsService),
        categoriesController: new CategoriesController(entityServices.categoriesService),
        currenciesController: new CurrenciesController(entityServices.currenciesService),
        customersController: new CustomersController(entityServices.customersService),
        ordersController: new OrdersController(entityServices.ordersService),
        paymentsController: new PaymentsController(entityServices.paymentsService),
        productImagesController: new ProductImagesController(entityServices.productImagesService),
        productPropertiesController: new ProductPropertiesController(entityServices.productPropertiesService),
        productsController: new ProductsController(entityServices.productsService),
        propertiesController: new PropertiesController(entityServices.propertiesService)
    };

    const {
        attachmentsController,
        brandsController,
        cartsController,
        categoriesController,
        currenciesController,
        customersController,
        ordersController,
        paymentsController,
        productImagesController,
        productPropertiesController,
        productsController,
        propertiesController
    } = entityControllers


    expressServer.addHandler(
        EMethod.GET,
        '/attachments',
        attachmentsController.getAttachments.bind(attachmentsController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/attachments:id',
        attachmentsController.getAttachment.bind(attachmentsController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/brands',
        brandsController.getBrands.bind(brandsController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/brands:id',
        brandsController.getBrand.bind(brandsController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/carts',
        cartsController.getCarts.bind(cartsController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/carts:id',
        cartsController.getCart.bind(cartsController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/categories',
        categoriesController.getCategories.bind(categoriesController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/categories:id',
        categoriesController.getCategory.bind(categoriesController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/currencies',
        currenciesController.getCurrencies.bind(currenciesController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/currencies:id',
        currenciesController.getCurrency.bind(currenciesController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/customers',
        customersController.getCustomers.bind(customersController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/customers:id',
        customersController.getCustomer.bind(customersController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/orders',
        ordersController.getOrders.bind(ordersController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/orders:id',
        ordersController.getOrder.bind(ordersController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/payments',
        paymentsController.getPayments.bind(paymentsController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/payments:id',
        paymentsController.getPayment.bind(paymentsController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/product_images',
        productImagesController.getProductImages.bind(productImagesController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/product_images:id',
        productImagesController.getProductImage.bind(productImagesController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/product_properties',
        productPropertiesController.getProperties.bind(productPropertiesController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/product_properties:id',
        productPropertiesController.getProperty.bind(productPropertiesController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/products',
        productsController.getProducts.bind(productsController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/products:id',
        productsController.getProduct.bind(productsController)
    )

    
    expressServer.addHandler(
        EMethod.GET,
        '/properties',
        propertiesController.getProperties.bind(propertiesController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/properties:id',
        propertiesController.getProperty.bind(propertiesController)
    )
}
