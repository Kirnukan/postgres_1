import { UsersEntity } from "../entities/users.entity";
import { Connection, Repository } from "typeorm";
import { UserTokenInterface } from "../interfaces/userToken.interface";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { configService } from "./config.service";


export class AuthenticationService {
   private readonly authenticationRepository: Repository<UsersEntity>;
   
   constructor(provider: Connection) {
      this.authenticationRepository = provider.getRepository(UsersEntity);
   }

    newToken(payload: string) {
        const jwtToken = jwt.sign(payload, configService.secretKey);
        return jwtToken;
    }

    verifyToken(token: unknown): UserTokenInterface {
        try {
            return <UserTokenInterface>jwt.verify(String(token), configService.secretKey)
        }
        catch (error){
            throw Error('Code 403, token is invalid')
        }
    }

   async authenticator(email: string, password: string) {
        const userExistence = await this.authenticationRepository.findOne({ where: email })
        if (!userExistence) {
            throw Error('Wrong user or password')
        }

        const verifyPassword = bcrypt.compareSync(password, userExistence.password)
        if (!verifyPassword) {
            throw Error('Wrong user or password')
        }

        return {
            user: userExistence,
            authenticated: true
        };
   }
}
