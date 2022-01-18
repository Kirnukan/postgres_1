import { CartsEntity } from 'src/entities/carts.entity';
import { RequestInterface } from '../interfaces/request.interface';
import { CartService } from 'src/services/cart.service';

export class CartController {
  constructor(private readonly cartService: CartService) {}
  async getById(req: RequestInterface): Promise<CartsEntity> {
    return await this.cartService.getOne(req.params.id);
  }
  async getAll(): Promise<CartsEntity[]> {
    return await this.cartService.getAll();
  }
  async deleteById(req: RequestInterface): Promise<void> {
    return await this.cartService.deleteOne(req.params.id);
  }
  async createByProperties(req: {}): Promise<void> {    
    return this.cartService.createOne(req);
  }
}