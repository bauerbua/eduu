import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { LoginUserDto } from '../dto/LoginUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

 @Post('login')
  @HttpCode(200)
  login(@Body() loginUserDto: LoginUserDto): Observable<unknown> {
    return this.authService.login(loginUserDto).pipe(
      map((jwt: string) => {
        return {
          access_token: jwt,
          token_type: 'JWT',
          expiresIn: '1h'
        }
      })
    )
  }

}
