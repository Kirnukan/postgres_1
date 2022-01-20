import { ProductsEntity } from '../entities/products.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class ProductController {
  private productRepository = getRepository(ProductsEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    return await this.productRepository.findOne(req.params.id)
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.productRepository.find();
  }
}