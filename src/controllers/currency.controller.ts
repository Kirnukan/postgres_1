import { CurrenciesEntity } from '../entities/currencies.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class CurrencyController {
  private currencyRepository = getRepository(CurrenciesEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    return await this.currencyRepository.findOne(req.params.id)
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.currencyRepository.find();
  }
}