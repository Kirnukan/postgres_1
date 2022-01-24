import { CategoriesEntity } from "../entities/categories.entity";
import { Connection, Repository } from "typeorm";

export class CategoriesService {
   private readonly categoriesRepository: Repository<CategoriesEntity>;

   constructor(provider: Connection) {
      this.categoriesRepository = provider.getRepository(CategoriesEntity);
   }

   async findAll(): Promise<CategoriesEntity[]> {
      return this.categoriesRepository.find();
   }

   async findOne(id: number): Promise<CategoriesEntity> {
      const result = await this.categoriesRepository.findOne(id);
      if (result) {
         throw 'Have not result'
      }
      return result;
   }
}
