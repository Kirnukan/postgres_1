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
import { UsersController } from '../controllers/user.controller';

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
import { UsersService } from '../services/users.service';

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
        propertiesService: new PropertiesService(connection),
        usersService: new UsersService(connection)
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
        propertiesController: new PropertiesController(entityServices.propertiesService),
        usersController: new UsersController(entityServices.usersService)
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
        propertiesController,
        usersController
    } = entityControllers

/**
* @swagger
* /attachments:
*  get:
*      summary: Returns an array of attachments
*      responses:
*          200:
*              description: Array of attachments
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/attachment'
*/

/**
* @swagger
* /attachments/{id}:
*  get:
*      summary: Returns a attachment with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Attachment's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Attachment
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/attachment'
*/

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

/**
 * @swagger
 * /brands/{id}:
 *  get:
 *      summary: Returns a brand with provided id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Brand's id
 *            schema:
 *                type: integer
 *      responses:
 *          200:
 *              description: Brand
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/brand'
 */

/**
 * @swagger
 * /brands:
 *  get:
 *      summary: Returns an array of brands
 *      responses:
 *          200:
 *              description: Array of brands
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/brand'
 */    

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

/**
 * @swagger
 * /carts:
 *  get:
 *      summary: Returns an array of carts
 *      responses:
 *          200:
 *              description: Array of carts
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/cart'
 */

/**
 * @swagger
 * /carts/{id}:
 *  get:
 *      summary: Returns a cart with provided id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Cart's id
 *            schema:
 *                type: integer
 *      responses:
 *          200:
 *              description: Cart
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/cart'
 */


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

/**
* @swagger
* /categories:
*  get:
*      summary: Returns an array of categories
*      responses:
*          200:
*              description: Array of categories
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/category'
*/

/**
* @swagger
* /categories/{id}:
*  get:
*      summary: Returns a category with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Category's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Category
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/category'
*/

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

/**
* @swagger
* /currencies:
*  get:
*      summary: Returns an array of currencies
*      responses:
*          200:
*              description: Array of currencies
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/currency'
*/

/**
* @swagger
* /currencies/{id}:
*  get:
*      summary: Returns a currency with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Currency's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Currency
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/currency'
*/

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

/**
* @swagger
* /customers:
*  get:
*      summary: Returns an array of customers
*      responses:
*          200:
*              description: Array of customers
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/customer'
*/

/**
* @swagger
* /customers/{id}:
*  get:
*      summary: Returns a customer with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Customer's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Customer
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/customer'
*/
    
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
    
/**
* @swagger
* /orders:
*  get:
*      summary: Returns an array of orders
*      responses:
*          200:
*              description: Array of orders
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/order'
*/

/**
* @swagger
* /orders/{id}:
*  get:
*      summary: Returns a order with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Order's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Order
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/order'
*/
    
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

/**
* @swagger
* /payments:
*  get:
*      summary: Returns an array of payments
*      responses:
*          200:
*              description: Array of payments
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/payment'
*/

/**
* @swagger
* /payments/{id}:
*  get:
*      summary: Returns a payment with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Payment's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Payment
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/payment'
*/

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

/**
* @swagger
* /productsImages:
*  get:
*      summary: Returns an array of products images
*      responses:
*          200:
*              description: Array of products images
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/product_image'
*/

/**
* @swagger
* /productsImages/{id}:
*  get:
*      summary: Returns a product image with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Product image's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Product image
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/product_image'
*/

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

/**
* @swagger
* /productProperties:
*  get:
*      summary: Returns an array of product properties
*      responses:
*          200:
*              description: Array of product properties
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/product_property'
*/

/**
* @swagger
* /productProperties/{id}:
*  get:
*      summary: Returns a product property with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Product property's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Product property
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/product_property'
*/

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

/**
 * @swagger
 * /products:
 *  get:
 *      summary: Returns an array of products
 *      responses:
 *          200:
 *              description: Array of products
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/product'
 */

/**
 * @swagger
 * /products/{id}:
 *  get:
 *      summary: Returns a product with provided id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Product's id
 *            schema:
 *                type: integer
 *      responses:
 *          200:
 *              description: Product
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/product'
 */

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


/**
* @swagger
* /properties:
*  get:
*      summary: Returns an array of properties
*      responses:
*          200:
*              description: Array of properties
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/property'
*/

/**
* @swagger
* /properties/{id}:
*  get:
*      summary: Returns a property with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Property's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: Property
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/property'
*/
    
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



/**
* @swagger
* /users:
*  get:
*      summary: Returns an array of users
*      responses:
*          200:
*              description: Array of users
*              content: 
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/user'
*/

/**
* @swagger
* /users/{id}:
*  get:
*      summary: Returns a user with provided id
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: User's id
*            schema:
*                type: integer
*      responses:
*          200:
*              description: User
*              content: 
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/user'
*/
    
    expressServer.addHandler(
        EMethod.GET,
        '/users',
        usersController.getUsers.bind(usersController)
    )

    expressServer.addHandler(
        EMethod.GET,
        '/users:id',
        usersController.getUser.bind(usersController)
    )
}
