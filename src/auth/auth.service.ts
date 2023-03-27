import {
  BadRequestException,
  Injectable,
  LoggerService,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/createUser.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import * as bcrypt from 'bcryptjs';
import { customException } from '../common/Exceptions/customException.exception';
import { errors } from '../common/Exceptions/errors';
import { UserRepository } from './Repository/user.repository';
import { Role, User } from './Entities/user.Entity';
import CustomLogger from '../Logging/customLogger';

@Injectable()
export class AuthService {
  constructor(
    private readonly repo:UserRepository,
    private readonly logger:CustomLogger,
    private jwt: JwtService,
  ) {}

  // Login User
  async login(loginDto: UserLoginDto) {
    let user=await this.repo.findByEmail(loginDto.email)
    this.logger.log(`LOG user ${loginDto.email} tries to login`,'SIGN IN')
    if (!user) {
      throw new customException(errors.invalidEmailPassword,400);
    } else {
      if (await this.verifyPassword(loginDto.password, user.password)) {
        const token = await this.jwt.signAsync({
          email: user.email,
          id: user.id,
        });
        delete user.password;
        return { token,email:user.email,roles:user.role };
      } else {
       this.logger.error(` user ${loginDto.email} Failed to login`,'SIGN IN')

        throw new customException(errors.invalidEmailPassword,400);
      }
    }
  }
  
//Register 
  async register(createUserDto: CreateUserDto) {
    const { email, password,role,name } = createUserDto;

    /*Check if the user is already present in database, if yes, throw error */
    // const checkUser = await this.repo.findOne({ where: { email } });
    this.logger.log(` user ${email} tries to Register`,'SIGN UP')

    let checkUser =await this.repo.findByEmail(email)
    if (checkUser) {
      this.logger.error(` user ${email}  is already Registered`,'SIGN UP')

      throw new customException(errors.alreadyRegistered,400);
    } else {
      const user = new User();
      // const role=new rolesEntitiy();
      user.email = email;
      user.password = password;
      user.name=name
      user.role=role??Role.User;
      await this.repo.create(user)
      delete user.password;
      const token = await this.jwt.signAsync({
        email: user.email,
        id: user.id,
      });
      delete user.password;
    this.logger.log(` user ${email} Registered successfully`,'SIGN UP')

      return { token,email,role:user.role };
    }
  }
  async verifyPassword(password: string, userHash: string) {
    return await bcrypt.compare(password, userHash);
  }
}
