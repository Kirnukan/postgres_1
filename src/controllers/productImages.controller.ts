import { ProductsImagesEntity } from '../entities/productsImages.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class ProductImagesController {
  private productImagesRepository = getRepository(ProductsImagesEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
    return await this.productImagesRepository.findOne(req.params.id)
        }
    throw "Have not ID"
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.productImagesRepository.find();
  }
}
