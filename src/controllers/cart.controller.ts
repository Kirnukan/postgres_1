import { CartsEntity } from "../entities/carts.entity";
import { CartsService } from "../services/carts.service";
import { RequestInterface } from "../interfaces/request.interface";


export class CartsController {
   private readonly cartsService: CartsService;

   constructor(cartsService: CartsService) {
      this.cartsService = cartsService;
   }

   async getCart(req: RequestInterface): Promise<CartsEntity> {
      if (req.params.id || +req.params.id) {
        return this.cartsService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getCarts(): Promise<CartsEntity[]> {
      return this.cartsService.findAll();
   }

}
