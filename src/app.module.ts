import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'user',
      password: '',
      database: 'example_user',
      entities: [User],
      synchronize: false,
      dropSchema: false
    }), UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
