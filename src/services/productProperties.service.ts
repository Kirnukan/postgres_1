import { ProductsPropertiesEntity } from 'src/entities/productsProperties.entity';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

import { RepositoryInterface } from '../interfaces/repository.interface';

export class ProductPropertiesService {
  private readonly productPropertiesRepository: RepositoryInterface<ProductsPropertiesEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.productPropertiesRepository = dataProvider.getRepository(ProductsPropertiesEntity);
  }

  async getAll(): Promise<ProductsPropertiesEntity[]> {
    return this.productPropertiesRepository.findAll();
  }
  async getOne(id: string): Promise<ProductsPropertiesEntity> {
    return this.productPropertiesRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.productPropertiesRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.productPropertiesRepository.create(req);
  }
}
