import { CategoriesEntity } from "../entities/categories.entity";
import { CategoriesService } from "../services/categories.service";
import { RequestInterface } from "../interfaces/request.interface";


export class CategoriesController {
   private readonly categoriesService: CategoriesService;

   constructor(categoriesService: CategoriesService) {
      this.categoriesService = categoriesService;
   }

   async getCategory(req: RequestInterface): Promise<CategoriesEntity> {
      if (req.params.id || +req.params.id) {
        return this.categoriesService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getCategories(): Promise<CategoriesEntity[]> {
      return this.categoriesService.findAll();
   }

}
