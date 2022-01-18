import { CategoriesEntity } from 'src/entities/categories.entity';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

import { RepositoryInterface } from '../interfaces/repository.interface';

export class CategoryService {
  private readonly categoryRepository: RepositoryInterface<CategoriesEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.categoryRepository = dataProvider.getRepository(CategoriesEntity);
  }

  async getAll(): Promise<CategoriesEntity[]> {
    return this.categoryRepository.findAll();
  }
  async getOne(id: string): Promise<CategoriesEntity> {
    return this.categoryRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.categoryRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.categoryRepository.create(req);
  }
}
