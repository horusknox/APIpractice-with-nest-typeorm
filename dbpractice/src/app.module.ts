import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './users/users.module';
import { User } from './typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: "mysql",
      host: 'localhost',
      port: 3306,
      username: "root",
      password: "Shoukath@15",
      database: "dbpractice",
      entities: [User],
      synchronize: true,
    }),userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
