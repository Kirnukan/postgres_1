import { CartsEntity } from "../entities/carts.entity";
import { Connection, Repository } from "typeorm";

export class CartsService {
   private readonly cartsRepository: Repository<CartsEntity>;

   constructor(provider: Connection) {
      this.cartsRepository = provider.getRepository(CartsEntity);
   }

   async findAll(): Promise<CartsEntity[]> {
      return this.cartsRepository.find();
   }

   async findOne(id: number): Promise<CartsEntity> {
      const result = await this.cartsRepository.findOne(id);
      if (!result) {
         throw 'Have not result'
      }
      return result;
   }
}
