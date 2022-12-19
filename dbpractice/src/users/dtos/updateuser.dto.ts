import {IsEmail, IsNotEmpty} from 'class-validator';
export class updateuserdto{
    @IsNotEmpty()
    username:string;
    @IsNotEmpty()
    password:string;
    @IsEmail()
    email:string;
}