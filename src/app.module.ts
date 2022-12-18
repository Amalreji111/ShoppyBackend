import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule ,} from '@nestjs/typeorm';
import configuration from './config/config'
// import { User } from './user/Entities/user.Entity';
import {DataSource}from 'typeorm'
import { AuthModule } from './auth/auth.module';
import { User } from './auth/Entities/user.Entity';
import LogsMiddleware from './Logging/LogMiddleware';
import DatabaseLogger from './Logging/databaseLogger';
import { LoggerModule } from './Logging/logger.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        // host: configService.get('database.host'),
        // port: configService.get('database.dbport'),
        name:'default',
        url:configService.get('database.url'),
        // host:String(databaseConstants.host),
        // port:parseInt(databaseConstants.port),
        // username: configService.get('database.username'),
        // password: configService.get('database.password'),
        // username:String(databaseConstants.username),
        // password:String(databaseConstants.password),
        // database: configService.get('database.database'),
        // database:String(databaseConstants.database),
        logger: new DatabaseLogger(),

        autoLoadEntities: true,
        synchronize: true,
        entities:[User]
      }),

      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
      
      inject: [ConfigService],
    }),
    AuthModule,
    LoggerModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogsMiddleware)
      .forRoutes('*');
  }
}

