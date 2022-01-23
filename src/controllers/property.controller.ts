import { PropertiesEntity } from "../entities/properties.entity";
import { PropertiesService } from "../services/properties.service";
import { RequestInterface } from "../interfaces/request.interface";

export class PropertiesController {
   private readonly propertiesService: PropertiesService;

   constructor(propertiesService: PropertiesService) {
      this.propertiesService = propertiesService;
   }

   async getProperty(req: RequestInterface): Promise<PropertiesEntity> {
      if (req.params.id || +req.params.id) {
        return this.propertiesService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getProperties(): Promise<PropertiesEntity[]> {
      return this.propertiesService.findAll();
   }

}
