import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';

import { IUser } from '../models/users/interfaces/user.interface';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UsersService } from '../models/users/users.service';

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService) {
  }

  login(user: IUser) {
    return from(user);
  }

  registerUser(user: CreateUserDto) {
    return this.usersService.createUser(user);
  }


}
