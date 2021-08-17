export interface ErrorModel {
  status?: number;
  message: string;
}

export default class CustomError  implements ErrorModel {
  status?: number;
  message: string;

  constructor (error: ErrorModel) {
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