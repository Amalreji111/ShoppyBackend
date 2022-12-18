import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { customException } from './Exceptions/customException.exception';
import { errors } from './Exceptions/errors';
import { User } from './Entities/user.Entity';
import { UserRepository } from './Repository/user.repository';
require("dotenv").config();


export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly UserRepo:UserRepository) {
    super({
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
      
      // jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
      //   return request?.cookies?.Authentication;
      // }]),
    });
  }

  async validate(payload: any, req: Request) {
    if (!payload) {
      throw new customException(errors.unAuthorized,400)

    }
    const user  =   await this.UserRepo.findByEmail(payload.email)
    if (!user) {
      throw new customException(errors.unAuthorized,400)
      throw new UnauthorizedException();
    }
    req['user'] = user;
    return req['user'];
  }
}
