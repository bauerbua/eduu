import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DatabaseModule
  ]
})
export class AppModule {}
