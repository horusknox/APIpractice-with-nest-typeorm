import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";


@Injectable()
export class Jwtstrategy extends PassportStrategy(Strategy){
    constructor(@InjectRepository(User) private userRepository:Repository<User>,private userService:UsersService){
        
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey:"SECRET"//needs to implemented with environment variables
        })
     }
        async validate(payload:any){
            return  this.userService.findById(payload.id);
    }
}