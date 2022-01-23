import { BrandsEntity } from "../entities/brands.entity";
import { Connection, Repository } from "typeorm";

export class BrandsService {
   private readonly brandsRepository: Repository<BrandsEntity>;

   constructor(provider: Connection) {
      this.brandsRepository = provider.getRepository(BrandsEntity);
   }

   async findAll(): Promise<BrandsEntity[]> {
      return this.brandsRepository.find();
   }

   async findOne(id: number): Promise<BrandsEntity> {
      const result = await this.brandsRepository.findOne(id);
      if (!result) {
         throw 'Have not result'
      }
      return result;
   }
}
