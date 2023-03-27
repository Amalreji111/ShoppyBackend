import { Test, TestingModule } from '@nestjs/testing';
import { LikeCommentReplyController } from './like-comment-reply.controller';
import { LikeCommentReplyService } from './like-comment-reply.service';

describe('LikeCommentReplyController', () => {
  let controller: LikeCommentReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikeCommentReplyController],
      providers: [LikeCommentReplyService],
    }).compile();

    controller = module.get<LikeCommentReplyController>(LikeCommentReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
