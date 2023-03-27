import { Module } from '@nestjs/common';
import { LikeCommentReplyService } from './like-comment-reply.service';
import { LikeCommentReplyController } from './like-comment-reply.controller';

@Module({
  controllers: [LikeCommentReplyController],
  providers: [LikeCommentReplyService]
})
export class LikeCommentReplyModule {}
