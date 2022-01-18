import { ProductsImagesEntity } from 'src/entities/productsImages.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { ProductImagesService } from 'src/services/productImages.service';

export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}
  async getById(req: RequestInterface): Promise<ProductsImagesEntity> {
    return await this.productImagesService.getOne(req.params.id);
  }
  async getAll(): Promise<ProductsImagesEntity[]> {
    return await this.productImagesService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.productImagesService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.productImagesService.createOne(req);
  }
}