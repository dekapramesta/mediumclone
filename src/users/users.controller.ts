import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '@app/users/users.service';
import { CreateUserDto } from './dto/createusers.dto';
import { UserEntity } from './users.entity';
import { UserResponseInterface } from './types/userResponseInterface.types';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildResponse(user);
  }
}
