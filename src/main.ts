import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)
  const port=await configService.get('APP.app_port')??3000
  await app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
  });
}
bootstrap();
