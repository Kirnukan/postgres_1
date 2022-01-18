import { OrdersEntity } from '../entities/orders.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { OrderService } from '../services/order.service';

export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  async getById(req: RequestInterface): Promise<OrdersEntity> {
    return await this.orderService.getOne(req.params.id);
  }
  async getAll(): Promise<OrdersEntity[]> {
    return await this.orderService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.orderService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.orderService.createOne(req);
  }
}
