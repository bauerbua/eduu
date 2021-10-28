import { Module } from '@nestjs/common';
import { JWTStrategy } from './jwt-auth/jwt-strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersModule } from '../models/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWTAuthGuard } from './jwt-auth/jwt-auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '1h',
        },
      })
    })
  ],
  providers: [AuthService, JWTStrategy, JWTAuthGuard],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
