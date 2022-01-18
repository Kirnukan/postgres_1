import {
    ListenerInterface,
    THandler,
    EMethod
  } from './interfaces/listener.interface';
  import { configService } from './services/config.service';
  import express from 'express';
  import http from 'http';

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

  export async function router() {
    const server = new ExpressServer(configService.port);
    server.addHandler(
        EMethod.GET,
        '/orders/:id',
        async (req) =>
          await orderControllerInstance.getOrderById(req).catch((err) => err)
      );
      server.addHandler(
        EMethod.GET,
        '/orders',
        async () => await orderControllerInstance.getOrders().catch((err) => err)
      );
    
      server.addHandler(
        EMethod.DELETE,
        '/orders/:id',
        async (req) =>
          await orderControllerInstance.deleteOrder(req).catch((err) => err)
      );
    
      server.addHandler(
        EMethod.GET,
        '/products/:id',
        async (req) =>
          await productControllerInstance.getProductById(req)
      );
      server.addHandler(
        EMethod.GET,
        '/products',
        async () =>
          await productControllerInstance.getProducts()
      );
      server.addHandler(
        EMethod.DELETE,
        '/products/:id',
        async (req) =>
          await productControllerInstance.deleteProduct(req)
      );
    await server.start();
    console.log('Server started...');
  }
    // const services = {
    //     cartsService: new CartService(),
    //     brandsService: new BrandService(),
    //     ordersService: new OrderService(),
    //     categoriesService: new CategoryService(),
    //     attachmentsService: new AttachmentService(),
    //     propertiesService: new PropertyService(),
    //     productsService: new ProductService(),
    //     productsPropertiesService: new ProductPropertiesService(),
    //     productsImagesService: new ProductImagesService(),
    //     paymentsService: new PaymentService(),
    //     customersService: new CustomerService(),
    //     currenciesService: new CurrencyService(),
    // };
    // const controllers = {
    //     cartsController: new CartController(services.cartsService),
    //     brandsController: new BrandController(services.brandsService),
    //     ordersController: new OrderController(services.ordersService),
    //     categoriesController: new CategoryController(services.categoriesService),
    //     attachmentsController: new AttachmentController(services.attachmentsService),
    //     propertiesController: new PropertyController(services.propertiesService),
    //     productsController: new ProductController(services.productsService),
    //     productsPropertiesController: new ProductPropertiesController(services.productsPropertiesService),
    //     productsImagesController: new ProductImagesController(services.productsImagesService),
    //     paymentsController: new PaymentController(services.paymentsService),
    //     customersController: new CustomerController(services.customersService),
    //     currenciesController: new CurrencyController(services.currenciesService),
    // };
  

  