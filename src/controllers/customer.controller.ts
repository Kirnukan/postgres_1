import { CustomersEntity } from '../entities/customers.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class CustomerController {
  private customerRepository = getRepository(CustomersEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
    return await this.customerRepository.findOne(req.params.id)
        }
    throw "Have not ID"
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.customerRepository.find();
  }
}
