
import { AttachmentsEntity } from 'src/entities/attachments.entity';
import { RepositoryInterface } from '../interfaces/repository.interface';
import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';

export class AttachmentService {
  private readonly attachmentRepository: RepositoryInterface<AttachmentsEntity>;

  constructor(dataProvider: DataProviderInterface) {
    this.attachmentRepository = dataProvider.getRepository(AttachmentsEntity);
  }

  async getAll(): Promise<AttachmentsEntity[]> {
    return this.attachmentRepository.findAll();
  }
  async getOne(id: string): Promise<AttachmentsEntity> {
    return this.attachmentRepository.findOne(id);
  }
  async deleteOne(id: string): Promise<void> {
    return this.attachmentRepository.delete(id);
  }
  async createOne(req: {}): Promise<void> {
    return this.attachmentRepository.create(req);
  }
}
