import { ProductsImagesEntity } from "../entities/productsImages.entity";
import { ProductImagesService } from "../services/productImages.service";
import { RequestInterface } from "../interfaces/request.interface";


export class ProductImagesController {
   private readonly productImagesService: ProductImagesService;

   constructor(productImagesService: ProductImagesService) {
      this.productImagesService = productImagesService;
   }

   async getProductImage(req: RequestInterface): Promise<ProductsImagesEntity> {
      if (req.params.id || +req.params.id) {
        return this.productImagesService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getProductImages(): Promise<ProductsImagesEntity[]> {
      return this.productImagesService.findAll();
   }

}
