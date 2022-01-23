import { CurrenciesEntity } from "../entities/currencies.entity";
import { RequestInterface } from "../interfaces/request.interface";
import { CurrenciesService } from "../services/currencies.service";

export class CurrenciesController {
   private readonly currenciesService: CurrenciesService;

   constructor(currenciesService: CurrenciesService) {
      this.currenciesService = currenciesService;
   }

   async getCurrency(req: RequestInterface): Promise<CurrenciesEntity> {
      if (req.params.id || +req.params.id) {
        return this.currenciesService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getCurrencies(): Promise<CurrenciesEntity[]> {
      return this.currenciesService.findAll();
   }

}
