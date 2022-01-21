import { Request, Response, NextFunction } from 'express';

import { PropertiesEntity } from '../entities/properties.entity';
import { getRepository } from 'typeorm';

export class PropertyController {
  private propertyRepository = getRepository(PropertiesEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
    return await this.propertyRepository.findOne(req.params.id)
    }
    throw "Have not ID"
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.propertyRepository.find();
  }
}
