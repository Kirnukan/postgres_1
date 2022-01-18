import { PaymentsEntity } from 'src/entities/payments.entity';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';


import { RepositoryInterface } from '../interfaces/repository.interface';

export class PaymentService {
  private readonly paymentRepository: RepositoryInterface<PaymentsEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.paymentRepository = dataProvider.getRepository(PaymentsEntity);
  }

  async getAll(): Promise<PaymentsEntity[]> {
    return this.paymentRepository.findAll();
  }
  async getOne(id: string): Promise<PaymentsEntity> {
    return this.paymentRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.paymentRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.paymentRepository.create(req);
  }
}
