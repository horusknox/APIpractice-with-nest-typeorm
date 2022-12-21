import { CanActivate, ExecutionContext, Injectable,UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

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
  }
}