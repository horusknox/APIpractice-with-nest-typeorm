<<<<<<< HEAD
import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
=======
import { CanActivate, ExecutionContext, Injectable,UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
>>>>>>> parent of 13488e5 (Fixed the code and completed guards)

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

<<<<<<< HEAD
  canActivate(context: ExecutionContext): boolean {
    console.log(this.reflector.get<string[]>('roles', context.getHandler()));
    
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
     if (!roles) {
      throw new HttpException("User dosen't have any roles", HttpStatus.FORBIDDEN);     
          }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user.roles);
=======
    const user={
      name:"Shoukath",
      roles:["admin"]
    }

    const requiredroles='admin';

    if(!user.roles.includes(requiredroles)){
      // throw new UnauthorizedException('User not admin');
      return false;
    }
    return true;
>>>>>>> parent of 13488e5 (Fixed the code and completed guards)
  }
}

function matchRoles(roles: string[], roles1: any): boolean {
    for(let i=0; i<roles.length; i++) {
        if(roles1.includes(roles[i])) {
            return true;
        }
    }
}