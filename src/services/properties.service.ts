import { PropertiesEntity } from "../entities/properties.entity";
import { Connection, Repository } from "typeorm";

export class PropertiesService {
   private readonly propertiesRepository: Repository<PropertiesEntity>;

   constructor(provider: Connection) {
      this.propertiesRepository = provider.getRepository(PropertiesEntity);
   }

   async findAll(): Promise<PropertiesEntity[]> {
      return this.propertiesRepository.find();
   }

   async findOne(id: number): Promise<PropertiesEntity> {
      const result = await this.propertiesRepository.findOne(id);
      if (!result) {
         throw 'Have not result'
      }
      return result;
   }
}
