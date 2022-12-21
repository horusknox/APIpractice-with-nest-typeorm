import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {InjectRepository} from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import {Repository} from 'typeorm';



@Injectable()
export class AuthService {
    constructor(private userservice:UsersService,@InjectRepository(User) private userRepository:Repository<User>){}
    async validateuser(username:string,password:string):Promise<any>
    {
       const user=await this.userRepository.findOne( {where: {
        username:username
      }
    });
       if(user&&username===password) 
       {
        const{password,username,...rest}=user;
        return user;
       }
       return null;
    }
}
 