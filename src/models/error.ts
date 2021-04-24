export interface IError {
  status?: number;
  message: string;
}

export default class CustomError  implements IError {
  status?: number;
  message: string;

  constructor (error: IError) {
    this.status  = error.status;
    this.message = error.message;
  }

  toString (): string {
    if(this.message) {
      return this.message;
    }
    return "Unknown Error";
  }
}