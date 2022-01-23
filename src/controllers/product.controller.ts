import { ProductsEntity } from "../entities/products.entity";
import { ProductsService } from "../services/products.service";
import { RequestInterface } from "../interfaces/request.interface";


export class ProductsController {
   private readonly productsService: ProductsService;

   constructor(productsService: ProductsService) {
      this.productsService = productsService;
   }

   async getProduct(req: RequestInterface): Promise<ProductsEntity> {
      if (req.params.id || +req.params.id) {
        return this.productsService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getProducts(): Promise<ProductsEntity[]> {
      return this.productsService.findAll();
   }

}
