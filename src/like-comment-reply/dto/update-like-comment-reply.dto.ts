import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeCommentReplyDto } from './create-like-comment-reply.dto';

export class UpdateLikeCommentReplyDto extends PartialType(CreateLikeCommentReplyDto) {}
