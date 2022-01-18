import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

import { PropertiesEntity } from 'src/entities/properties.entity';
import { RepositoryInterface } from '../interfaces/repository.interface';

export class PropertyService {
  private readonly propertyRepository: RepositoryInterface<PropertiesEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.propertyRepository = dataProvider.getRepository(PropertiesEntity);
  }

  async getAll(): Promise<PropertiesEntity[]> {
    return this.propertyRepository.findAll();
  }
  async getOne(id: string): Promise<PropertiesEntity> {
    return this.propertyRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.propertyRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.propertyRepository.create(req);
  }
}
