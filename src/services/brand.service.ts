
import { BrandsEntity } from 'src/entities/brands.entity';
import { RepositoryInterface } from '../interfaces/repository.interface';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

export class BrandService {
  private readonly brandRepository: RepositoryInterface<BrandsEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.brandRepository = dataProvider.getRepository(BrandsEntity);
  }

  async getAll(): Promise<BrandsEntity[]> {
    return this.brandRepository.findAll();
  }
  async getOne(id: string): Promise<BrandsEntity> {
    return this.brandRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.brandRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.brandRepository.create(req);
  }
}
