import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly firebase: FirebaseService) {}
  canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    const [prefix, token] = req.headers.authorization?.split(' ');

    console.log(prefix);
    if (!token) {
      throw new UnauthorizedException();
    }

    return this.firebase.verifyToken(token);
  }
}
