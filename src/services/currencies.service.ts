import { CurrenciesEntity } from "../entities/currencies.entity";
import { Connection, Repository } from "typeorm";

export class CurrenciesService {
   private readonly currenciesRepository: Repository<CurrenciesEntity>;

   constructor(provider: Connection) {
      this.currenciesRepository = provider.getRepository(CurrenciesEntity);
   }

   async findAll(): Promise<CurrenciesEntity[]> {
      return this.currenciesRepository.find();
   }

   async findOne(id: number): Promise<CurrenciesEntity> {
      const result = await this.currenciesRepository.findOne(id);
      if (result) {
         return result;
      }
      throw 'Have not result';
   }
}
