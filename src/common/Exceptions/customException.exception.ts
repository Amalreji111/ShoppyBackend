import { HttpException, HttpStatus } from "@nestjs/common";

export class customException extends HttpException{
    constructor(message:string,status:HttpStatus){
        super(message,status);

    };
}