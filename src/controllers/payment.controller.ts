import { PaymentsEntity } from "../entities/payments.entity";
import { RequestInterface } from "../interfaces/request.interface";
import { PaymentsService } from "../services/payments.service";

export class PaymentsController {
   private readonly paymentsService: PaymentsService;

   constructor(paymentsService: PaymentsService) {
      this.paymentsService = paymentsService;
   }

   async getPayment(req: RequestInterface): Promise<PaymentsEntity> {
      if (req.params.id || +req.params.id) {
        return this.paymentsService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getPayments(): Promise<PaymentsEntity[]> {
      return this.paymentsService.findAll();
   }

}
