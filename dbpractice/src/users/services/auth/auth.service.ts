import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {InjectRepository} from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import {Repository} from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(userservice:UsersService,@InjectRepository(User) public userRepository:Repository<User>,private jwtService: JwtService){}
     async validateuser(username:string,password:string):Promise<any>
      {
         const user=await this.userRepository.findOne( {
           where:{username:username}
      });
         if(user&&password===password) 
         {
        const{password,username,...rest}=user;
          return rest;
         }
         return null;
     }

   async login(user:any){
      const payload={name:user.name,sub:user.id};

      return {
         access_token:this.jwtService.sign(payload),
   }
   }
}