import { UsersEntity } from "../entities/users.entity";
import { RequestInterface } from "../interfaces/request.interface";
import { UsersService } from "../services/users.service";

export class UsersController {
   private readonly usersService: UsersService;

   constructor(usersService: UsersService) {
      this.usersService = usersService;
   }

   async getUser(req: RequestInterface): Promise<UsersEntity> {
      if (req.params.id || +req.params.id) {
        return this.usersService.findOne(+req.params.id);
      }
      throw 'Have not  id';
   }
   
   async getUsers(): Promise<UsersEntity[]> {
      return this.usersService.findAll();
   }

}
