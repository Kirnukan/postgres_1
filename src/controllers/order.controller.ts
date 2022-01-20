import { OrdersEntity } from '../entities/orders.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class OrderController {
  private orderRepository = getRepository(OrdersEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    return await this.orderRepository.findOne(req.params.id)
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.orderRepository.find();
  }
}
