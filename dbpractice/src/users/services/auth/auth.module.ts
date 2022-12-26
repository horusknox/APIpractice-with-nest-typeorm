import { forwardRef, Module } from '@nestjs/common';
import { userModule } from 'src/users/users.module';
import {PassportModule} from '@nestjs/passport'
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from '../users/users.service';
// import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { Jwtstrategy } from './jwt.service';


@Module({
    imports:[TypeOrmModule.forFeature([User]),PassportModule.register({session:true}),JwtModule.register({
        secret:'SECRET',
        signOptions:{expiresIn: '60s'},
    })],
    providers:[AuthService,LocalStrategy,UsersService,Jwtstrategy],
    exports: [AuthService]
})
// @Module({
//     imports:[PassportModule,forwardRef(() => userModule)],
//     providers:[AuthService,LocalStrategy]
// })
export class AuthModule {
    
}
