import { Injectable,ArgumentMetadata, PipeTransform,HttpException,HttpStatus} from '@nestjs/common';
@Injectable()
export class namepipe implements PipeTransform{
  transform(value:any,metadata:ArgumentMetadata) {
  //  if(!value.username.startsWith("shoukath"))
  //  {
    //  throw new HttpException('User name should start with shoukath', HttpStatus.BAD_GATEWAY);
    //}
  
    if(value.password.length<=8)
    {
      throw new HttpException('Password not long enough', HttpStatus.BAD_REQUEST);
    }
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(!(format.test(value.password))){
      throw new HttpException('Password is not strong...use special characters,numbers', HttpStatus.BAD_REQUEST);

    }

    return value
  }
}
