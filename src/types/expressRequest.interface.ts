import { UserEntity } from '@app/users/users.entity';
import { Request } from 'express';
export interface ExpressRequest extends Request {
  user?: UserEntity;
}
