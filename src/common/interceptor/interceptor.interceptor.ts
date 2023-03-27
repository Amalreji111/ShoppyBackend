import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { IResponse } from '../iresponse';
import { Response } from 'express';

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, IResponse<T, HttpException>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponse<T, HttpException>> {
    const name = context.getClass().name;
    const response = context.switchToHttp().getResponse<Response>();

    if (name === 'HealthController') {
      return next.handle().pipe(
        map((data) => {
          if (!response.headersSent) {
            response.send(data);
          }
          return data;
        })
      );
    }

    return next.handle().pipe(
      map((data) => {
        const iResponse = IResponse.ofResult(data).setStatusCode(response.statusCode);
        if (!response.headersSent) {
          response.send(iResponse);
        }
        return iResponse;
      })
    );
  }
}
