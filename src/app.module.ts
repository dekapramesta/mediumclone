import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagsModule } from '@app/tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';
import { UsersModule } from '@app/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig.options), TagsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
