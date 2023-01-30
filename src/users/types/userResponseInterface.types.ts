import { UserType } from './users.type';

export interface UserResponseInterface {
  user: UserType & { token: string };
}
