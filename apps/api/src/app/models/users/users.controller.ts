import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { JWTAuthGuard } from '../../authentication/jwt-auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

  constructor(private  readonly userService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Observable<IUser> {
    return this.userService.createUser(createUserDto)
  }

  @UseGuards(JWTAuthGuard)
  @Get()
  findAll(@Req() reguest): Observable<IUser[]> {
    console.log(reguest.user)
    return this.userService.findAll()
  }
}
