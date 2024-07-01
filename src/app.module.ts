import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UsersModule, BoardModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
