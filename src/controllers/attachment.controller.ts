import { AttachmentsEntity } from 'src/entities/attachments.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { AttachmentService } from 'src/services/attachment.service';

export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}
  async getById(req: RequestInterface): Promise<AttachmentsEntity> {
    return await this.attachmentService.getOne(req.params.id);
  }
  async getAll(): Promise<AttachmentsEntity[]> {
    return await this.attachmentService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.attachmentService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.attachmentService.createOne(req);
  }
}