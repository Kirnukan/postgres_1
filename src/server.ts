import {
    ListenerInterface,
    THandler,
    EMethod
  } from './interfaces/listener.interface';
  import { configService } from './services/config.service';
  import express from 'express';
  import http from 'http';
  import { OrderController } from './controllers/order.controller';
  import { ProductController } from './controllers/product.controller';
  import { OrderService } from './services/order.service';
  import { ProductService } from './services/product.service';
import { AttachmentService } from './services/attachment.service';
import { CartService } from './services/cart.service';
import { BrandService } from './services/brand.service';
import { CategoryService } from './services/category.service';
import { PropertyService } from './services/property.service';
import { ProductPropertiesService } from './services/productProperties.service';
import { ProductImagesService } from './services/productImages.service';
import { PaymentService } from './services/payment.service';
import { CustomerService } from './services/customer.service';
import { CurrencyService } from './services/currency.service';
import { CartController } from './controllers/cart.controller';
import { BrandController } from './controllers/brand.controller';
import { CategoryController } from './controllers/category.controller';
import { AttachmentController } from './controllers/attachment.controller';
import { PropertyController } from './controllers/property.controller';
import { ProductImagesController } from './controllers/productImages.controller';
import { ProductPropertiesController } from './controllers/productProperties.controller';
import { PaymentController } from './controllers/payment.controller';
import { CustomerController } from './controllers/customer.controller';
import { CurrencyController } from './controllers/currency.controller';
import { PostgresDataProvider } from './providers/postgresDataProvider';

  export class ExpressServer implements ListenerInterface {
    private readonly app;
    private connection: http.Server | null = null;

    constructor(private readonly port: number) {
      this.app = express();
    }
  
    async start(): Promise<void> {
      return new Promise((resolve) => {
        this.connection = this.app.listen(this.port, resolve);
      });
    }
    async stop(): Promise<void> {
      return new Promise((resolve, reject) => {
        if (this.connection) {
          this.connection.close((err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        }
      });
    }
    addHandler(method: EMethod, route: string, handler: THandler): void {
      switch (method) {
        case EMethod.GET:
          this.app.get(route, async (req, res) => {
            const result = await handler(req);
            res.send(result);
          });
          break;
        case EMethod.POST:
          this.app.post(route, async (req, res) => {
            const result = await handler(req);
            res.send(result);
          });
          break;
        case EMethod.PUT:
          this.app.put(route, async (req, res) => {
            const result = await handler(req);
            res.send(result);
          });
          break;
        case EMethod.DELETE:
          this.app.delete(route, async (req, res) => {
            const result = await handler(req);
            res.send(result);
          });
          break;
      }
    }
  }

  export async function router(serviceProvider: PostgresDataProvider) {
    const server = new ExpressServer(configService.port);
    const services = {
        cartsService: new CartService(serviceProvider),
        brandsService: new BrandService(serviceProvider),
        ordersService: new OrderService(serviceProvider),
        categoriesService: new CategoryService(serviceProvider),
        attachmentsService: new AttachmentService(serviceProvider),
        propertiesService: new PropertyService(serviceProvider),
        productsService: new ProductService(serviceProvider),
        productsPropertiesService: new ProductPropertiesService(serviceProvider),
        productsImagesService: new ProductImagesService(serviceProvider),
        paymentsService: new PaymentService(serviceProvider),
        customersService: new CustomerService(serviceProvider),
        currenciesService: new CurrencyService(serviceProvider),
    };
    const controllers = {
        cartsController: new CartController(services.cartsService),
        brandsController: new BrandController(services.brandsService),
        ordersController: new OrderController(services.ordersService),
        categoriesController: new CategoryController(services.categoriesService),
        attachmentsController: new AttachmentController(services.attachmentsService),
        propertiesController: new PropertyController(services.propertiesService),
        productsController: new ProductController(services.productsService),
        productsPropertiesController: new ProductPropertiesController(services.productsPropertiesService),
        productsImagesController: new ProductImagesController(services.productsImagesService),
        paymentsController: new PaymentController(services.paymentsService),
        customersController: new CustomerController(services.customersService),
        currenciesController: new CurrencyController(services.currenciesService),
    };
  
    // server.addHandler(
    //   EMethod.GET,
    //   '/orders/:id',
    //   async (req) =>
    //     await orderController.getById(req));


    await server.start();
    console.log('Server started...');
  }
  