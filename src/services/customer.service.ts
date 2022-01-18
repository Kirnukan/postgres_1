import { CustomersEntity } from 'src/entities/customers.entity';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';


import { RepositoryInterface } from '../interfaces/repository.interface';

export class CustomerService {
  private readonly customerRepository: RepositoryInterface<CustomersEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.customerRepository = dataProvider.getRepository(CustomersEntity);
  }

  async getAll(): Promise<CustomersEntity[]> {
    return this.customerRepository.findAll();
  }
  async getOne(id: string): Promise<CustomersEntity> {
    return this.customerRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.customerRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.customerRepository.create(req);
  }
}
