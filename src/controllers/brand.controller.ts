import { BrandsEntity } from "../entities/brands.entity";
import { RequestInterface } from "../interfaces/request.interface";
import { BrandsService } from "../services/brands.service";

export class BrandsController {
   private readonly brandsService: BrandsService;

   constructor(brandsService: BrandsService) {
      this.brandsService = brandsService;
   }

   async getBrand(req: RequestInterface): Promise<BrandsEntity> {
      if (req.params.id || +req.params.id) {
        return this.brandsService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }

   async getBrands(): Promise<BrandsEntity[]> {
      return this.brandsService.findAll();
   }

}
