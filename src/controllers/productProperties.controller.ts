import { ProductsPropertiesEntity } from 'src/entities/productsProperties.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { ProductPropertiesService } from 'src/services/productProperties.service';

export class ProductPropertiesController {
  constructor(private readonly productPropertiesService: ProductPropertiesService) {}
  async getById(req: RequestInterface): Promise<ProductsPropertiesEntity> {
    return await this.productPropertiesService.getOne(req.params.id);
  }
  async getAll(): Promise<ProductsPropertiesEntity[]> {
    return await this.productPropertiesService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.productPropertiesService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.productPropertiesService.createOne(req);
  }
}