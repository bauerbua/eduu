import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IUser } from './interfaces/user.interface';
import { from, Observable } from 'rxjs';
import { CreateUserDto } from '../../dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {

  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
  }

  findAll(): Observable<IUser[]> {
    return from(this.userRepository.find());
  }

  private findUserByEmail(email: string): Observable<IUser> {
    return from(this.userRepository.findOne({email}, {select:['id', 'email', 'username', 'password']}))
  }

  createUser(user: CreateUserDto) {
    return from(this.userRepository.save(user));
  }

}
