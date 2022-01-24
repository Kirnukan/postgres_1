import { ProductsPropertiesEntity } from "../entities/productsProperties.entity";
import { Connection, Repository } from "typeorm";

export class ProductPropertiesService {
   private readonly productPropertiesRepository: Repository<ProductsPropertiesEntity>;

   constructor(provider: Connection) {
      this.productPropertiesRepository = provider.getRepository(ProductsPropertiesEntity);
   }

   async findAll(): Promise<ProductsPropertiesEntity[]> {
      return this.productPropertiesRepository.find();
   }

   async findOne(id: number): Promise<ProductsPropertiesEntity> {
      const result = await this.productPropertiesRepository.findOne(id);
      if (result) {
         return result;
      }
      throw 'Have not result';
   }
}
