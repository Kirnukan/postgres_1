import { BrandsEntity } from '../entities/brands.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class BrandController {
  
  private brandRepository = getRepository(BrandsEntity);

  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
    return await this.brandRepository.findOne(req.params.id)
        }
    throw "Have not ID"
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.brandRepository.find();
  }
}
