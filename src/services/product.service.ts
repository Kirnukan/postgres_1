import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

import { ProductsEntity } from 'src/entities/products.entity';
import { RepositoryInterface } from '../interfaces/repository.interface';
export class ProductService {
  private readonly productRepository: RepositoryInterface<ProductsEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.productRepository = dataProvider.getRepository(ProductsEntity);
  }

  async getAll(): Promise<ProductsEntity[]> {
    return this.productRepository.findAll();
  }
  async getOne(id: string): Promise<ProductsEntity> {
    return this.productRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.productRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.productRepository.create(req);
  }
}
