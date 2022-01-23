import { OrdersEntity } from "../entities/orders.entity";
import { OrdersService } from "../services/orders.service";
import { RequestInterface } from "../interfaces/request.interface";


export class OrdersController {
   private readonly ordersService: OrdersService;

   constructor(ordersService: OrdersService) {
      this.ordersService = ordersService;
   }

   async getOrder(req: RequestInterface): Promise<OrdersEntity> {
      if (req.params.id || +req.params.id) {
        return this.ordersService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getOrders(): Promise<OrdersEntity[]> {
      return this.ordersService.findAll();
   }

}
