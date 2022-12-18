import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)
 
  app.enableCors();
  app.setGlobalPrefix("api/shoppy");
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
   const port=await configService.get('APP.app_port')??3000
  await app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
  });
}
bootstrap();
