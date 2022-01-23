import { ProductsPropertiesEntity } from "../entities/productsProperties.entity";
import { ProductPropertiesService } from "../services/productProperties.service";
import { RequestInterface } from "../interfaces/request.interface";

export class ProductPropertiesController {
   private readonly productPropertiesService: ProductPropertiesService;

   constructor(productPropertiesService: ProductPropertiesService) {
      this.productPropertiesService = productPropertiesService;
   }

   async getProperty(req: RequestInterface): Promise<ProductsPropertiesEntity> {
      if (req.params.id || +req.params.id) {
        return this.productPropertiesService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getProperties(): Promise<ProductsPropertiesEntity[]> {
      return this.productPropertiesService.findAll();
   }

}
