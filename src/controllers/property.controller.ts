import { PropertiesEntity } from 'src/entities/properties.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { PropertyService } from 'src/services/property.service';

export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  async getById(req: RequestInterface): Promise<PropertiesEntity> {
    return await this.propertyService.getOne(req.params.id);
  }
  async getAll(): Promise<PropertiesEntity[]> {
    return await this.propertyService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.propertyService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.propertyService.createOne(req);
  }
}