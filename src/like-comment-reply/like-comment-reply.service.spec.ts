import { Test, TestingModule } from '@nestjs/testing';
import { LikeCommentReplyService } from './like-comment-reply.service';

describe('LikeCommentReplyService', () => {
  let service: LikeCommentReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikeCommentReplyService],
    }).compile();

    service = module.get<LikeCommentReplyService>(LikeCommentReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
