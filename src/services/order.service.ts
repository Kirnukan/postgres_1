
import { OrdersEntity } from '../entities/orders.entity';
import { RepositoryInterface } from '../interfaces/repository.interface';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

export class OrderService {
  private readonly orderRepository: RepositoryInterface<OrdersEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.orderRepository = dataProvider.getRepository(OrdersEntity);
  }

  async getAll(): Promise<OrdersEntity[]> {
    return this.orderRepository.findAll();
  }
  async getOne(id: string): Promise<OrdersEntity> {
    return this.orderRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.orderRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.orderRepository.create(req);
  }
}
