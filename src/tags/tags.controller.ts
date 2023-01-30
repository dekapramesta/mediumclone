/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { TagsEntity } from './tags.entity';
import { TagService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tag = await this.tagService.findAll();
    return {
      tags: tag.map((tg) => tg.name),
    };
  }
}
