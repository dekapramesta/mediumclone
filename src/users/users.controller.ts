import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '@app/users/users.service';
import { CreateUserDto } from './dto/createusers.dto';
import { UserEntity } from './users.entity';
import { UserResponseInterface } from './types/userResponseInterface.types';
import { LoginUserDto } from './dto/loginUsers.dto';
import { Request } from 'express';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { User } from './decorators/users.decorator';
import { AuthGuard } from './guards/auth.guards';
import { UpdateUserDto } from './dto/updateUser.dto';

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

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginDto);
    return this.userService.buildResponse(user);
  }

  @Get('users')
  @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEntity): Promise<UserResponseInterface> {
    return this.userService.buildResponse(user);
  }

  @Put('users')
  @UseGuards(AuthGuard)
  async updateCurrentUser(
    @User('id') currentUserID: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.updateUser(
      currentUserID,
      updateUserDto,
    );
    return this.userService.buildResponse(user);
  }
}
