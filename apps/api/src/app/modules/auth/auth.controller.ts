import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { IUser } from '../../entities/user.interface';
import { Observable } from 'rxjs';

@Controller('auth')
export class AuthController {

  // ToDo: Register Controller in app

  constructor(private readonly userService: UsersService) {
  }

  @Post('add')
  add(@Body() user:IUser): Observable<IUser> {
    return this.userService.createUser(user)
  }

  @Get()
  findAll(): Observable<IUser[]> {
    return this.userService.findAll();
  }

}
