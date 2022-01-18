import { ProductsEntity } from 'src/entities/products.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { ProductService } from 'src/services/product.service';

export class ProductController {
  constructor(private readonly productService: ProductService) {}
  async getById(req: RequestInterface): Promise<ProductsEntity> {
    return await this.productService.getOne(req.params.id);
  }
  async getAll(): Promise<ProductsEntity[]> {
    return await this.productService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.productService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.productService.createOne(req);
  }
}