import { Injectable } from '@nestjs/common'
import { UsersRepository } from './users.repository';
import { CreateUserDto } from '../../dto/CreateUser.dto';
import { from, Observable } from 'rxjs';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(private usersRepository: UsersRepository) {
  }

  createUser(user: CreateUserDto) {
    this.usersRepository.createUser(user);
  }

  comparePasswords(password: string, storedPasswordHash: string): Observable<any> {
    return from(bcrypt.compare(password, storedPasswordHash))
  }

  hashPassword(password: string): Observable<string> {
    return from<Promise<string>>(bcrypt.hash(password, 12));
  }
}
