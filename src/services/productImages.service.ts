import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

import { ProductsImagesEntity } from 'src/entities/productsImages.entity';
import { RepositoryInterface } from '../interfaces/repository.interface';

export class ProductImagesService {
  private readonly productImagesRepository: RepositoryInterface<ProductsImagesEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.productImagesRepository = dataProvider.getRepository(ProductsImagesEntity);
  }

  async getAll(): Promise<ProductsImagesEntity[]> {
    return this.productImagesRepository.findAll();
  }
  async getOne(id: string): Promise<ProductsImagesEntity> {
    return this.productImagesRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.productImagesRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.productImagesRepository.create(req);
  }
}
