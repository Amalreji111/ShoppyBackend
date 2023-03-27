/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './globalException/exception.filter';
import CustomLogger from './Logging/customLogger';
import { ResponseTransformInterceptor } from './common/interceptor/interceptor.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)
 
  app.enableCors();
  app.setGlobalPrefix("api/shoppy");
  app.use(cookieParser());
  app.useGlobalInterceptors(new ResponseTransformInterceptor())
  app.useGlobalFilters(new AllExceptionsFilter(app.get(CustomLogger)))
  app.useGlobalPipes(new ValidationPipe());
   const port=await configService.get('APP.app_port')??3000
   const url=`http://localhost:${port}/api/shoppy`
  await app.listen(port,()=>{
   Logger.log(`App is listening on port ${url}`,`NEST APP`)
  Logger.log(`Docs is available on ${url}/docs`,`NEST APP`)
  });
}
bootstrap();
