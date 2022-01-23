import { ProductsImagesEntity } from "../entities/productsImages.entity";
import { Connection, Repository } from "typeorm";

export class ProductImagesService {
   private readonly attachmentsRepository: Repository<ProductsImagesEntity>;

   constructor(provider: Connection) {
      this.attachmentsRepository = provider.getRepository(ProductsImagesEntity);
   }

   async findAll(): Promise<ProductsImagesEntity[]> {
      return this.attachmentsRepository.find();
   }

   async findOne(id: number): Promise<ProductsImagesEntity> {
      const result = await this.attachmentsRepository.findOne(id);
      if (!result) {
         throw 'Have not result'
      }
      return result;
   }
}
