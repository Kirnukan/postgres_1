import { PaymentsEntity } from '../entities/payments.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class PaymentController {
  
  private paymentRepository = getRepository(PaymentsEntity);

  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
    return await this.paymentRepository.findOne(req.params.id)
        }
    throw "Have not ID"
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.paymentRepository.find();
  }
}
