import { CategoriesEntity } from 'src/entities/categories.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { CategoryService } from 'src/services/category.service';

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  async getById(req: RequestInterface): Promise<CategoriesEntity> {
    return await this.categoryService.getOne(req.params.id);
  }
  async getAll(): Promise<CategoriesEntity[]> {
    return await this.categoryService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.categoryService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.categoryService.createOne(req);
  }
}