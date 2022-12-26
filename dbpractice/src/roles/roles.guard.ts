import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

matchRoles(roles: string[], roles1: any): boolean {
    for(let i=0; i<roles.length; i++) {
        if(roles1.includes(roles[i])) {
            return true;
        }
    }
}
  canActivate(context: ExecutionContext): boolean {   
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
     if (!roles) {
      throw new HttpException("User dosen't have any roles", HttpStatus.FORBIDDEN);     
          }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.roles);

}
}
