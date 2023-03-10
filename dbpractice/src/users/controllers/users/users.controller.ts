import { Controller,UsePipes,ValidationPipe,Request,Get,Body,Post,Put,Delete,Param,ParseIntPipe, UseGuards} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createuser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { updateuserdto } from 'src/users/dtos/updateuser.dto';
import {namepipe} from 'src/pipes/name.pipe';
import { RolesGuard } from 'src/roles/roles.guard';
import { LocalAuthGuard } from 'src/users/services/auth/local-auth.guard';
import { Authenticateguard } from 'src/users/services/auth/authenticated.guard';
import { AuthService } from 'src/users/services/auth/auth.service';
import { JwtAuthGuard } from 'src/users/services/auth/jwtauth.guard';
import { Roles } from 'src/roles/roles.decorator';
@Controller('users')

export class UsersController {

    constructor(private userservice:UsersService,private authservice:AuthService){}

    @Get()
    @UseGuards(RolesGuard)
    async getusers()
    {
        const users=await this.userservice.fetchusers()
        return users
    }

    
        @Post()
        @UsePipes(new ValidationPipe,new namepipe())
        @Roles('admin')
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
        @UseGuards(RolesGuard)
        deleteuser(@Param('id',ParseIntPipe)id:number)
        {
             return  this.userservice.deleteuser(id)
           
        }

        @UseGuards(LocalAuthGuard)
        @Roles('admin')
        @Post('login')
        login(@Request() req:any){
            return this.authservice.login(req.user)
        }

        @UseGuards(RolesGuard)//Authenticateguard,JwtAuthGuard,
        @Get('protected')
        gethello(@Request() req:any):string{
            return "you are  in the protected route"
        }
}
