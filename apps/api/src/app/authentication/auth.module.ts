import { Module } from '@nestjs/common';
import { UsersModule } from '../models/users/users.module';
import { JWTStrategy } from './jwt-strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      // ToDo create env variable process.env.JWT_SECRET
      secret: 'SECRET',
      signOptions: {
        expiresIn: '1h',
      },
    })
  ],
  providers: [JWTStrategy, AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
