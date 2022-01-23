import { CustomersEntity } from "../entities/customers.entity";
import { Connection, Repository } from "typeorm";

export class CustomersService {
   private readonly custometsRepository: Repository<CustomersEntity>;

   constructor(provider: Connection) {
      this.custometsRepository = provider.getRepository(CustomersEntity);
   }

   async findAll(): Promise<CustomersEntity[]> {
      return this.custometsRepository.find();
   }

   async findOne(id: number): Promise<CustomersEntity> {
      const result = await this.custometsRepository.findOne(id);
      if (!result) {
         throw 'Have not result'
      }
      return result;
   }
}
