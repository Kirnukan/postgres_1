import { AttachmentsEntity } from "../entities/attachments.entity";
import { Connection, Repository } from "typeorm";

export class AttachmentsService {
   private readonly attachmentsRepository: Repository<AttachmentsEntity>;

   constructor(provider: Connection) {
      this.attachmentsRepository = provider.getRepository(AttachmentsEntity);
   }

   async findAll(): Promise<AttachmentsEntity[]> {
      return this.attachmentsRepository.find();
   }

   async findOne(id: number): Promise<AttachmentsEntity> {
      const result = await this.attachmentsRepository.findOne(id);
      if (result) {
         return result;
      }
      throw 'Have not result';
   }
}
