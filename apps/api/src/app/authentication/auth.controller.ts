import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { IUser } from '../models/users/interfaces/user.interface';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { LoginUserDto } from '../dto/LoginUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post('register')
  registerUser(@Body() createdUserDto: CreateUserDto): Observable<IUser> {
    throw new Error('Method not implemented')
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() loginUserDto: LoginUserDto): Observable<string> {
    return this.authService.login(loginUserDto);
  }

}
