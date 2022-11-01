import { jwtConstants } from './../constants/constants';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, PayloadTooLargeException } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        })
    }

    async validate(payload: any) {
        return {userId: payload.sub, username: payload.username}
    }
}