import { Injectable } from '@nestjs/common';
import { CreateLikeCommentReplyDto } from './dto/create-like-comment-reply.dto';
import { UpdateLikeCommentReplyDto } from './dto/update-like-comment-reply.dto';

@Injectable()
export class LikeCommentReplyService {
  create(createLikeCommentReplyDto: CreateLikeCommentReplyDto) {
    return 'This action adds a new likeCommentReply';
  }

  findAll() {
    return `This action returns all likeCommentReply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} likeCommentReply`;
  }

  update(id: number, updateLikeCommentReplyDto: UpdateLikeCommentReplyDto) {
    return `This action updates a #${id} likeCommentReply`;
  }

  remove(id: number) {
    return `This action removes a #${id} likeCommentReply`;
  }
}
