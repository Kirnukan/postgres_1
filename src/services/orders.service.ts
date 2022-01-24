import { OrdersEntity } from "../entities/orders.entity";
import { Connection, Repository } from "typeorm";

export class OrdersService {
   private readonly ordersRepository: Repository<OrdersEntity>;

   constructor(provider: Connection) {
      this.ordersRepository = provider.getRepository(OrdersEntity);
   }

   async findAll(): Promise<OrdersEntity[]> {
      return this.ordersRepository.find();
   }

   async findOne(id: number): Promise<OrdersEntity> {
      const result = await this.ordersRepository.findOne(id);
      if (result) {
         return result;
      }
      throw 'Have not result';
   }
}
