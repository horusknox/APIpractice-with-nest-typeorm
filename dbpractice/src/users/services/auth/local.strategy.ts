import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { AuthService } from "./auth.service"


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        //Must call super here;dattebayo!!!
        super();//configuerstions here
    }
    async validate(username:string,password:string){
        const user=await this.authService.validateuser(username,password);

        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}