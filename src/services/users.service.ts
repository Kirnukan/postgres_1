import { UsersEntity } from "../entities/users.entity";
import { Connection, Repository } from "typeorm";

export class UsersService {
   private readonly usersRepository: Repository<UsersEntity>;

   constructor(provider: Connection) {
      this.usersRepository = provider.getRepository(UsersEntity);
   }

   async findAll(): Promise<UsersEntity[]> {
      return this.usersRepository.find();
   }

   async findOne(id: number): Promise<UsersEntity> {
      const result = await this.usersRepository.findOne(id);
      if (result) {
         return result;
      }
      throw 'Have not result';
   }
}
