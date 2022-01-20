import { PaymentsEntity } from '../entities/payments.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class PaymentController {
  private paymentRepository = getRepository(PaymentsEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    return await this.paymentRepository.findOne(req.params.id)
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.paymentRepository.find();
  }
}