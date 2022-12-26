import { Injectable,HttpException,HttpStatus} from '@nestjs/common';
import { User } from 'src/typeorm/entities/User';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { createUserParams } from 'src/utils/types';
import { updateuserdto } from 'src/users/dtos/updateuser.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository:Repository<User>,
        ){}

    fetchusers()
    {
        return this.userRepository.find();
    }

    async createuser(userdetails:createUserParams){
        if(await this.userexists(userdetails))
            {
                throw new HttpException('User exists already', HttpStatus.BAD_GATEWAY);
            }
        else
        {
        const newuser=this.userRepository.create(
            {...userdetails,
                createdAt:new Date()
            });
            this.userRepository.save(newuser);
            return "created new user"
        }
        }

    updateuser(id:number,userupdatedetails:updateuserdto)
    {
        return this.userRepository.update(id,{...userupdatedetails})
    }


   async deleteuser(id:number)
    { 
        if(await this.useridexists(id))
        {
            this.userRepository.delete(id)
        }
        else{
                throw new HttpException("User dosen't exist", HttpStatus.BAD_REQUEST);
        }
}


    async userexists(userdetails:updateuserdto)
    {
        const user = await this.userRepository.findOne({
            where: {
              username:userdetails.username
            }
      })
      
      if(user) {
            return true
      } else {
          return false
      }
        
    }



    async useridexists(userid:number)
    {
        const user = await this.userRepository.findOneBy({ id: userid})
      
      if(user) {
            return true
      } 
      else {
          return false
      }
        
    }
}