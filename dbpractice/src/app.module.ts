import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './users/users.module';
import { User } from './typeorm/entities/User';
import { mid } from './middlewares/mid.middleware';
import { AuthModule } from './users/services/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5555,
      username: "postgres",
      password: "Shoukath@15",
      database: "dbpractice",
      entities: [User],
      synchronize: true,
    }),userModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(mid).forRoutes({path:'*',method:RequestMethod.ALL})
  }
}
