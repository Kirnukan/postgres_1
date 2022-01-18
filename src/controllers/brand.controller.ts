import { BrandsEntity } from 'src/entities/brands.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { BrandService } from 'src/services/brand.service';

export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  async getById(req: RequestInterface): Promise<BrandsEntity> {
    return await this.brandService.getOne(req.params.id);
  }
  async getAll(): Promise<BrandsEntity[]> {
    return await this.brandService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.brandService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.brandService.createOne(req);
  }
}