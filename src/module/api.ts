import axios from 'axios';

import CustomError from "./model/error"

export class Api {
  ajax   : any;
  baseUrl: string;

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl;

    this._initializeAjax();
  }

  _initializeAjax () {
    const _ajax = axios.create({
      baseURL: this.baseUrl,
      withCredentials: true,
    });

    _ajax.interceptors.response.use((response) => {
      return response.data;
    }, (error) => {
      const errorObj = (() => {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답
          return error.response.data;
        } else {
          return error;
        }
      })();

      const customError = new CustomError(errorObj);

      return Promise.reject([customError]);
    });

    this.ajax = _ajax;
  }

  call (ajaxInfo: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ajax(ajaxInfo)
      .then((result: any) => {
        resolve(result);
      })
      .catch((error: Array<CustomError>) => {
        reject(error);
      });
    });
  };
}

export class Rest extends Api {
  constructor () {
    // test용 URL (참고: https://jsonplaceholder.typicode.com)
    super("https://jsonplaceholder.typicode.com")
  }

  restApi (restObject: {
    url    : string,
    method : string,
    header?: string,
    data  ?: string
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.call(restObject)
      .then((result) => {
        resolve(result);
      })
      .catch((errors) => {
        reject(errors);
      })
    })
  }
}

export class Gql extends Api {

}