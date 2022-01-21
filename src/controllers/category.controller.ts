import { CategoriesEntity } from '../entities/categories.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class CategoryController {
  private categoryRepository = getRepository(CategoriesEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
    return await this.categoryRepository.findOne(req.params.id)
        }
    throw "Have not ID"
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.categoryRepository.find();
  }
}
