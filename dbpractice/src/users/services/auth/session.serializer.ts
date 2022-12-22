import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UsersService } from "../users/users.service";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    serializeUser(user:any,done:(err:Error,user:any) => void):any{
            done(null,{id:user.id});
        }
        deserializeUser(payload: any, done: (err:Error,payload:string)=>void) {
            done(null,payload);            
        }
    }