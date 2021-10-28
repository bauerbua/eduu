/**
 * Used for returning user Information to Client
 */

import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty() id: number;
  @IsNotEmpty() username: string;
  @IsNotEmpty() @IsEmail() email: string;
}
