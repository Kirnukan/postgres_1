import { CartsEntity } from '../entities/carts.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class CartController {
  private cartRepository = getRepository(CartsEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
    return await this.cartRepository.findOne(req.params.id)
        }
    throw "Have not ID"
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.cartRepository.find();
  }
}
