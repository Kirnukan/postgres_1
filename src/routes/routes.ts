import { AttachmentController } from '../controllers/attachment.controller';
import { BrandController } from '../controllers/brand.controller';
import { CartController } from '../controllers/cart.controller';
import { CategoryController } from '../controllers/category.controller';
import { CurrencyController } from '../controllers/currency.controller';
import { CustomerController } from '../controllers/customer.controller';
import { OrderController } from '../controllers/order.controller';
import { PaymentController } from '../controllers/payment.controller';
import { ProductController } from '../controllers/product.controller';
import { ProductImagesController } from '../controllers/productImages.controller';
import { ProductPropertiesController } from '../controllers/productProperties.controller';
import { PropertyController } from '../controllers/property.controller';
import { EMethod } from '../interfaces/listener.interface';

// const controllers = {
//     cartsController: new CartController(),
//     brandsController: new BrandController(),
//     ordersController: new OrderController(),
//     categoriesController: new CategoryController(),
//     attachmentsController: new AttachmentController(),
//     propertiesController: new PropertyController(),
//     productsController: new ProductController(),
//     productsPropertiesController: new ProductPropertiesController(),
//     productsImagesController: new ProductImagesController(),
//     paymentsController: new PaymentController(),
//     customersController: new CustomerController(),
//     currenciesController: new CurrencyController(),
// };
// const {
//     cartsController,
//     brandsController,
//     ordersController,
//     categoriesController,
//     attachmentsController,
//     propertiesController,
//     productsController,
//     productsPropertiesController,
//     productsImagesController,
//     paymentsController,
//     customersController,
//     currenciesController
// } = controllers;

// serverInstance.addHandler(EMethod.GET, '/attachments', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/attachments/:id', attachmentsController.getById.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/brands', brandsController.getAll.bind(brandsController))
// serverInstance.addHandler(EMethod.GET, '/brands/:id', brandsController.getById.bind(brandsController))

// serverInstance.addHandler(EMethod.GET, '/carts', cartsController.getAll.bind(cartsController))
// serverInstance.addHandler(EMethod.GET, '/carts/:id', cartsController.getAll.bind(cartsController))

// serverInstance.addHandler(EMethod.GET, '/categories', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/categories/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/currencies', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/currencies/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/customers', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/customers/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/orders', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/orders/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/payments', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/payments/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/products', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/products/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/product_images', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/product_images/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/product_properties', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/product_properties/:id', attachmentsController.getAll.bind(attachmentsController))

// serverInstance.addHandler(EMethod.GET, '/properties', attachmentsController.getAll.bind(attachmentsController))
// serverInstance.addHandler(EMethod.GET, '/properties/:id', attachmentsController.getById.bind(attachmentsController))


export const Routes = [  
    {
        method: EMethod.GET,
        route: '/attachments',
        controller: AttachmentController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/attachments/:id',
        controller: AttachmentController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/brands',
        controller: BrandController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/brands/:id',
        controller: BrandController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/carts',
        controller: CartController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/carts/:id',
        controller: CartController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/categories',
        controller: CategoryController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/categories/:id',
        controller: CategoryController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/currencies',
        controller: CurrencyController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/currencies/:id',
        controller: CurrencyController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/customers',
        controller: CustomerController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/customers/:id',
        controller: CustomerController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/orders',
        controller: OrderController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/orders/:id',
        controller: OrderController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/payments',
        controller: PaymentController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/payments/:id',
        controller: PaymentController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/products',
        controller: ProductController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/products/:id',
        controller: ProductController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/product_images',
        controller: ProductImagesController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/product_images/:id',
        controller: ProductImagesController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/product_properties',
        controller: ProductPropertiesController,
        action: 'getAll'
    },
    {
        method: EMethod.GET,
        route: '/product_properties/:id',
        controller: ProductPropertiesController,
        action: 'getById'
    },
    {
        method: EMethod.GET,
        route: '/properties',
        controller: PropertyController,
        action: 'getAll'
    },   
    {
        method: EMethod.GET,
        route: '/properties/:id',
        controller: PropertyController,
        action: 'getById'
    }
];
