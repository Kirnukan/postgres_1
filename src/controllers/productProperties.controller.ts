import { ProductsPropertiesEntity } from '../entities/productsProperties.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class ProductPropertiesController {
  private productPropertiesRepository = getRepository(ProductsPropertiesEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    return await this.productPropertiesRepository.findOne(req.params.id)
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.productPropertiesRepository.find();
  }
}