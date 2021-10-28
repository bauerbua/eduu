import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { from, map, Observable, switchMap } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
  }

  findAll(): Observable<IUser[]> {
    return from(this.userRepository.find());
  }

  findUserById(id: number): Observable<IUser> {
    return from(this.userRepository.findOne({ id }));
  }

  findUserByEmail(email: string): Observable<IUser | undefined> {
    return from(this.userRepository.findOne({email}, { select: ['id', 'username', 'password'] }));
  }

  createUser(createUserDto: CreateUserDto): Observable<IUser> {
    return this.mailExists(createUserDto.email).pipe(
      switchMap((exists: boolean) => {
        if(!exists) {
          return this.hashPassword(createUserDto.password).pipe(
            switchMap((passwordHash: string) => {
              // Overwrite the user password with the hash
              createUserDto.password = passwordHash;
              return from(this.userRepository.save(createUserDto)).pipe(
                map((savedUser: IUser) => {
                  const {password, ...user} = savedUser
                  return savedUser
                }));
            })
          );
        } else {
          throw new HttpException('Email already in use', HttpStatus.CONFLICT);
        }
      })
    )
  }

  private hashPassword(password: string): Observable<string> {
    return from<Promise<string>>(bcrypt.hash(password, 12));
  }

  private mailExists(email: string): Observable<boolean> {
    return this.findUserByEmail(email).pipe(
      map((user: IUser) => {
        return !!user;
      })
    )
  }
}
