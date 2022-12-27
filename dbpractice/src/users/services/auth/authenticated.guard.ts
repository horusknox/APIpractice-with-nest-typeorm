import {CanActivate,Injectable,ExecutionContext} from '@nestjs/common';

@Injectable()
export class Authenticateguard implements CanActivate{
    async canActivate(context:ExecutionContext){
        const request=context.switchToHttp().getRequest();  
        console.log(request);
           
        return request.isAuthenticated();
    }
}