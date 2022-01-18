import { CurrenciesEntity } from 'src/entities/currencies.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { CurrencyService } from 'src/services/currency.service';

export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}
  async getById(req: RequestInterface): Promise<CurrenciesEntity> {
    return await this.currencyService.getOne(req.params.id);
  }
  async getAll(): Promise<CurrenciesEntity[]> {
    return await this.currencyService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.currencyService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.currencyService.createOne(req);
  }
}