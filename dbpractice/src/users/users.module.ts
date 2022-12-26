import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { AuthService } from './services/auth/auth.service';
import { AuthModule } from './services/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { Jwtstrategy } from './services/auth/jwt.service';

@Module({
    imports:[TypeOrmModule.forFeature([User]), forwardRef(()=>AuthModule)],
    controllers:[UsersController],

    providers:[UsersService,JwtService, AuthService],
})
export class userModule{}