import { Controller,UsePipes,ValidationPipe,Request,Get,Body,Post,Put,Delete,Param,ParseIntPipe, UseGuards} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createuser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { updateuserdto } from 'src/users/dtos/updateuser.dto';
import {namepipe} from 'src/pipes/name.pipe';
import { RolesGuard } from 'src/roles/roles.guard';
import { LocalAuthGuard } from 'src/users/services/auth/local-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private userservice:UsersService){}

    @Get()
    @UseGuards(RolesGuard)
    async getusers()
    {
        
       const users=await this.userservice.fetchusers()
        return users
    }

        @Post()
        @UsePipes(new ValidationPipe,new namepipe())
        createuser(@Body()createuserdto:createUserDto)
        {
            return this.userservice.createuser(createuserdto)
            
        }

        @Put(':id')
        updateuser(@Param('id',ParseIntPipe)id:number,
        @Body()updateuserdto:updateuserdto)
        {
           this.userservice.updateuser(id,updateuserdto)
            return "updated user"
        }

        @Delete(':id')
        deleteuser(@Param('id',ParseIntPipe)id:number)
        {
             return  this.userservice.deleteuser(id)
           
        }

        @UseGuards(LocalAuthGuard)
        @Post('login')
        login(@Request() req:any){
            return req.user
        }
}
