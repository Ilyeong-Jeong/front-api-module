import axios from 'axios';

import { stringify } from 'qs';

import CustomError from "./model/error"

import { IRestObject, IGqlObject } from "./type/types"

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
      // CORS 사용 시 정책적으로 wildcard만 있는 경우 인증 데이터를 사용하지 못하도록 제재
      // withCredentials: true,
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

  _restConvert (restObject: IRestObject) {
    return Object.assign({}, restObject, {
      url: (() => {
        if (restObject.qs) {
          return `${restObject.url}${stringify(restObject.qs, { addQueryPrefix: true })}`
        } else {
          return restObject.url
        }
      })()
    })
  }

  restApi (restObject: IRestObject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.call(this._restConvert(restObject))
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

  constructor () {
    // test용 URL (참고: https://api.spacex.land/graphql/)
    super("https://api.spacex.land")
  }

  gqlApi (gqlObject: IGqlObject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.call({
        url   : 'graphql',
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        data: Object.assign({}, {
          variables: {}
        }, gqlObject)
      })
      .then((result) => {
        // error 케이스
        if(result.errors && result.errors.length > 0) {
          reject(result.errors.map((error: any) => {
            if(error.extensions) {
              return new CustomError({
                status : error.extensions.status,
                message: error.extensions.message,
              });
            } else {
              return new CustomError({
                message: "System Error"
              })
            }
          }));
        } else {
          resolve(result.data);
        }
      })
      .catch((errors) => {
        reject(errors);
      })
    })
  }
}