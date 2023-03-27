import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './Repository/user.repository';
import { LoggerModule } from '../Logging/logger.module';
require("dotenv").config();

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        algorithm: 'HS512',
        expiresIn: '7d',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    LoggerModule,
    
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy,UserRepository],
})

export class AuthModule {

}
