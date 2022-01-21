import { AttachmentsEntity } from '../entities/attachments.entity';
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';


export class AttachmentController {
  private attachmentRepository = getRepository(AttachmentsEntity);
  async getById(req: Request, res: Response, next: NextFunction)  {
    if (req.params.id) {
      return await this.attachmentRepository.findOne(req.params.id)
        }
    throw "Have not ID"
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    return await this.attachmentRepository.find();
  }
}
