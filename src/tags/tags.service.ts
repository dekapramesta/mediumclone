import { Injectable } from '@nestjs/common';
import { TagsEntity } from './tags.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagsEntity)
    private readonly tagRepository: Repository<TagsEntity>,
  ) {}

  async findAll(): Promise<TagsEntity[]> {
    return await this.tagRepository.find();
  }
}
