import { ArgumentsHost, BadGatewayException, Catch, ExceptionFilter, HttpException, InternalServerErrorException, LoggerService } from '@nestjs/common';
import CustomLogger from '../Logging/customLogger';
import { IResponse } from '../common/iresponse';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

    constructor(private readonly loggerService: CustomLogger) {

    }

    catch(exception: unknown, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();

        var ex: HttpException = exception instanceof HttpException ? exception : new InternalServerErrorException()
        const status = ex.getStatus();

        try {
            this.loggerService.error(`Catch ${exception} Request: ${request} Response: ${response}`,`${this}`)
            // this.loggerService.error(this, 'catch', exception, request, response)
        } catch (error) {

            this.loggerService.error(`${error}` ,`GLOBAL EXCEPTION`)
        }

        response.status(status).json(
            IResponse.ofError(ex)
                .setStatusCode(
                    status
                )
        );

    }
}

