import { PaymentsEntity } from 'src/entities/payments.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { PaymentService } from 'src/services/payment.service';

export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  async getById(req: RequestInterface): Promise<PaymentsEntity> {
    return await this.paymentService.getOne(req.params.id);
  }
  async getAll(): Promise<PaymentsEntity[]> {
    return await this.paymentService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.paymentService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.paymentService.createOne(req);
  }
}