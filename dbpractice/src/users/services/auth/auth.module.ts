import { forwardRef, Module } from '@nestjs/common';
import { userModule } from 'src/users/users.module';
import {PassportModule} from '@nestjs/passport'
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports:[PassportModule,forwardRef(() => userModule)],
    providers:[AuthService,LocalStrategy]
})
export class AuthModule {
    
}
