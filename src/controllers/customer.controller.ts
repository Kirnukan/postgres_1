import { CustomersEntity } from 'src/entities/customers.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { CustomerService } from 'src/services/customer.service';

export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  async getById(req: RequestInterface): Promise<CustomersEntity> {
    return await this.customerService.getOne(req.params.id);
  }
  async getAll(): Promise<CustomersEntity[]> {
    return await this.customerService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.customerService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.customerService.createOne(req);
  }
}