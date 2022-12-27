import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,private jwtservice:JwtService){}


 matchRoles(roles: string[], roles1: any): boolean {
     for(let i=0; i<roles.length; i++) {
         if(roles[i]==roles1)
         return true;
     }
     return false;
 }

 async canActivate(context: ExecutionContext):Promise<boolean> {   
     const userroles = this.reflector.get<string[]>('roles', context.getHandler());
     console.log(userroles);
     const jwtuserroles= this.jwtservice.decode();
      if (!userroles) {
       throw new HttpException("User dosen't have any roles", HttpStatus.FORBIDDEN);     
           }
     const reqroles=['admin']
     return this.matchRoles(reqroles,userroles);
}
}
