import { ProductsEntity } from "../entities/products.entity";
import { Connection, Repository } from "typeorm";

export class ProductsService {
   private readonly productsRepository: Repository<ProductsEntity>;

   constructor(provider: Connection) {
      this.productsRepository = provider.getRepository(ProductsEntity);
   }

   async findAll(): Promise<ProductsEntity[]> {
      return this.productsRepository.find();
   }

   async findOne(id: number): Promise<ProductsEntity> {
      const result = await this.productsRepository.findOne(id);
      if (!result) {
         throw 'Have not result'
      }
      return result;
   }
}
