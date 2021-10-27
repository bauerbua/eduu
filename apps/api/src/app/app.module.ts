import { Module } from '@nestjs/common';
import { AuthModule } from './authentication/auth.module';
import { UsersModule } from './models/users/users.module';

import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DatabaseModule
  ]
})
export class AppModule {}
