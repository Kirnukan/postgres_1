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
