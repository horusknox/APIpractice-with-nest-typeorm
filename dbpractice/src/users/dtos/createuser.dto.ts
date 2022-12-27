import {IsEmail, IsNotEmpty} from 'class-validator';
export class createUserDto{
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string;

    @IsEmail()
    email:string;
    
    roles:string
}