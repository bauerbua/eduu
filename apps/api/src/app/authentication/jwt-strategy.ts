import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // ToDo: not sure if enough, need to check again
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: /*process.env.JWT_SECRET*/ 'SECRET'
    });
  }

  async validate(payload: any): Promise<any> {
    return {
      id: payload.sub,
      name: payload.name
    }
  }
}
