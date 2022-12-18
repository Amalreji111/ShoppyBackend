import { Module } from '@nestjs/common';
import CustomLogger from './customLogger';
import { ConfigModule } from '@nestjs/config';
import LogsService from './logService/logs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Log from './logEntity/log.entity';
import ImportantLog from './logEntity/importantDataLog.entity';
 
@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Log,ImportantLog])],
  providers: [CustomLogger, LogsService],
  exports: [CustomLogger,LogsService],
})
export class LoggerModule {}