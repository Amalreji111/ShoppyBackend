import { HttpException } from "@nestjs/common";


 export enum IResponseStatus {
     SUCCESS = 'SUCCESS',
     NOT_SUUCCESS = 'NOT_SUCCESS'
 }


export class IResponse<R, E extends HttpException> {

    status :IResponseStatus
    statusCode :number
    result: R;
    error: any;


    public static ofResult<R, E extends HttpException>(result :R) :IResponse<R, E> {

        const response = new IResponse<R, E>() 

        response.status = IResponseStatus.SUCCESS;
        response.result = result;

        return response ;
    }

    public static ofError<R, E extends HttpException>(error :E) :IResponse<R, E> {
        
        const response = new IResponse<R, E>() 

        response.status = IResponseStatus.NOT_SUUCCESS;
        response.error = error.getResponse();

        return response ;
    }

    public setStatus(status :IResponseStatus) :IResponse<R, E> {
        
        this.status = status;
        return this ;
    }

    public setStatusCode(statusCode :number) :IResponse<R, E> {
        
        this.statusCode = statusCode;
        return this ;
    }
}
