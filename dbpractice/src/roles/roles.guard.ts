import { CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
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
      return false;
    }
    return true;
  }
}