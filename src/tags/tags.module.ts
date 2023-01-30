/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsController } from './tags.controller';
import { TagsEntity } from './tags.entity';
import { TagService } from './tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([TagsEntity])],
  controllers: [TagsController],
  providers: [TagService],
})
export class TagsModule {}
