import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport'
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from '../users/users.service';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports:[TypeOrmModule.forFeature([User]),PassportModule.register({session:true}),JwtModule.register({
        secret:'SECRET',
        signOptions:{expiresIn: '60s'},
    })],
    providers:[AuthService,LocalStrategy,UsersService,SessionSerializer],
    exports: [AuthService]
})
export class AuthModule {}