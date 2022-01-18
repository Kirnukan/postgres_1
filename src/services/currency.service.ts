import { CurrenciesEntity } from 'src/entities/currencies.entity';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';


import { RepositoryInterface } from '../interfaces/repository.interface';

export class CurrencyService {
  private readonly currencyRepository: RepositoryInterface<CurrenciesEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.currencyRepository = dataProvider.getRepository(CurrenciesEntity);
  }

  async getAll(): Promise<CurrenciesEntity[]> {
    return this.currencyRepository.findAll();
  }
  async getOne(id: string): Promise<CurrenciesEntity> {
    return this.currencyRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.currencyRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.currencyRepository.create(req);
  }
}
