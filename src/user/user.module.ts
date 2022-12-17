import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './Entities/user.Entity';
import { MongooseModule } from '@nestjs/mongoose';
import {TypeOrmModule} from"@nestjs/typeorm"
import { UserRepository } from './Repository/user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService,UserRepository]
})
export class UserModule {}
