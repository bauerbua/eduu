import { IsString } from 'class-validator';
import { LoginUserDto } from '../../../dto/LoginUser.dto';

export class CreateUserDto extends LoginUserDto {

  @IsString()
  username: string;
}
