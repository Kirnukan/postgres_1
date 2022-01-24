import { PaymentsEntity } from "../entities/payments.entity";
import { Connection, Repository } from "typeorm";

export class PaymentsService {
   private readonly paymentsRepository: Repository<PaymentsEntity>;

   constructor(provider: Connection) {
      this.paymentsRepository = provider.getRepository(PaymentsEntity);
   }

   async findAll(): Promise<PaymentsEntity[]> {
      return this.paymentsRepository.find();
   }

   async findOne(id: number): Promise<PaymentsEntity> {
      const result = await this.paymentsRepository.findOne(id);
      if (result) {
         return result;
      }
      throw 'Have not result';
   }
}
