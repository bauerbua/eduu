import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { from, Observable, switchMap } from 'rxjs';
import { UsersService } from '../models/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../dto/LoginUser.dto';
import { IUser } from '../models/users/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  generateJwt(user: IUser): Observable<string> {
    return from(this.jwtService.signAsync({user}))
  }

  login(loginUserDto: LoginUserDto): Observable<string> {
    return this.usersService.findUserByEmail(loginUserDto.email).pipe(
      switchMap((user: IUser) => {
        if(user) {
          return this.validatePassword(loginUserDto.password, user.password).pipe(
            switchMap((passwordMatches: boolean) => {
              if (passwordMatches) {
                return from(this.generateJwt(user))
              } else {
                throw new HttpException('Login failed', HttpStatus.UNAUTHORIZED);
              }
            })
          );
        } else {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
      })
    )
  }

  comparePasswords(password: string, storedPasswordHash: string): Observable<boolean> {
    return from(bcrypt.compare(password, storedPasswordHash))
  }

  private validatePassword(password: string, storedPasswordHash: string): Observable<boolean> {
    return this.comparePasswords(password, storedPasswordHash);
  }

}
