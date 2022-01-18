import { CartsEntity } from 'src/entities/carts.entity';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

import { RepositoryInterface } from '../interfaces/repository.interface';

export class CartService {
  private readonly cartRepository: RepositoryInterface<CartsEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.cartRepository = dataProvider.getRepository(CartsEntity);
  }

  async getAll(): Promise<CartsEntity[]> {
    return this.cartRepository.findAll();
  }
  async getOne(id: string): Promise<CartsEntity> {
    return this.cartRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.cartRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.cartRepository.create(req);
  }
}
