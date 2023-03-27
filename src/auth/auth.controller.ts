import { ApplyUser } from './current-user.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/userLogin.dto';
import { Request, Response } from 'express';
import { CurrentUser } from './user.decorator';
import { User } from './Entities/user.Entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async loginUser(@Body() loginDto: any, @Res() res: Response) {
    const user= await this.authService.login(
      loginDto as UserLoginDto,
    );
    /*res.setHeader('Set-Cookie', token);
    return res.send({ success: true });
*/

    res.cookie('IsAuthenticated', true, { maxAge: 2 * 60 * 60 * 1000 });
    res.cookie('Authentication', user.token, {
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000,
    }); // max age 2 hours

    return user;
  }

  @Post('register')
 async registerUser(@Body() body: CreateUserDto, @Res() res: Response) {
  const  user=await this.authService.register(body);
    res.cookie('IsAuthenticated', true, { maxAge: 2 * 60 * 60 * 1000 });
    res.cookie('Authentication', user.token, {
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000,
    }); // max age 2 hours
    return user;
  }

  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('IsAuthenticated')
    res.clearCookie('Authentication');
    return res.status(200).send({ success: true });
  }

  @Get('authstatus')
  @UseGuards(ApplyUser)
  authStatus(@CurrentUser() user: User) {
    return { status: !!user, user };
  }
}
