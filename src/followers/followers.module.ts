import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';

@Module({
  controllers: [FollowersController],
  providers: [FollowersService]
})
export class FollowersModule {}
