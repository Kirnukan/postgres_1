import { AttachmentsEntity } from "../entities/attachments.entity";
import { RequestInterface } from "../interfaces/request.interface";
import { AttachmentsService } from "../services/attachments.service";

export class AttachmentsController {
   private readonly attachmentsService: AttachmentsService;

   constructor(attachmentsService: AttachmentsService) {
      this.attachmentsService = attachmentsService;
   }

   async getAttachment(req: RequestInterface): Promise<AttachmentsEntity> {
      if (req.params.id || +req.params.id) {
        return this.attachmentsService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }

   async getAttachments(): Promise<AttachmentsEntity[]> {
      return this.attachmentsService.findAll();
   }


}
