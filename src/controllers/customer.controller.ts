import { CustomersEntity } from "../entities/customers.entity";
import { RequestInterface } from "../interfaces/request.interface";
import { CustomersService } from "../services/customers.service";

export class CustomersController {
   private readonly customersService: CustomersService;

   constructor(customersService: CustomersService) {
      this.customersService = customersService;
   }

   async getCustomer(req: RequestInterface): Promise<CustomersEntity> {
      if (req.params.id || +req.params.id) {
        return this.customersService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getCustomers(): Promise<CustomersEntity[]> {
      return this.customersService.findAll();
   }

}
