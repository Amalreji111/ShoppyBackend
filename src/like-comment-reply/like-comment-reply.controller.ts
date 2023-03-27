import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikeCommentReplyService } from './like-comment-reply.service';
import { CreateLikeCommentReplyDto } from './dto/create-like-comment-reply.dto';
import { UpdateLikeCommentReplyDto } from './dto/update-like-comment-reply.dto';

@Controller('like-comment-reply')
export class LikeCommentReplyController {
  constructor(private readonly likeCommentReplyService: LikeCommentReplyService) {}

  @Post()
  create(@Body() createLikeCommentReplyDto: CreateLikeCommentReplyDto) {
    return this.likeCommentReplyService.create(createLikeCommentReplyDto);
  }

  @Get()
  findAll() {
    return this.likeCommentReplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likeCommentReplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeCommentReplyDto: UpdateLikeCommentReplyDto) {
    return this.likeCommentReplyService.update(+id, updateLikeCommentReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likeCommentReplyService.remove(+id);
  }
}
