import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Repository } from 'typeorm';
import ImportantLog from '../logEntity/importantDataLog.entity';
import Log from '../logEntity/log.entity';
 
@Injectable()
export default class LogsService {
  private readonly logger = new Logger(LogsService.name)

  constructor(
    @InjectRepository(Log)
    private logsRepository: Repository<Log>,
    @InjectRepository(ImportantLog)
    private importantLog:Repository<ImportantLog>
  ) {}
 
  async createLog(log: any) {
    const newLog = await this.logsRepository.create(log);
    await this.logsRepository.save(newLog, {
   data:{ 
    isCreatingLogs: true
 }    
    });
    return newLog;
  }
  async createImportantLog(data:any){
    const newLog=await this.importantLog.create(data);
  try{
     await this.importantLog.save(data)
   }catch(err){
    this.logger.error('Something is not right to creating important log')
  }
    

  }
}