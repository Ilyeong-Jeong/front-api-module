import axios, { 
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse,
  AxiosError
} from 'axios';

import { stringify } from 'qs';

import { RestConfig, GqlConfig } from "models/api-config"

// GQL 200 ok error response type
interface AxiosGqlResponse extends AxiosResponse {
  errors: any;
}

// GQL error model
import CustomError from "models/error"

export class Api {
  private axiosInstance: AxiosInstance;
  private baseUrl: string;

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl;

    this.initializeAjax();
  }

  private initializeAjax () {
    const instance = axios.create({
      baseURL: this.baseUrl,
      // CORS 사용 시 정책적으로 wildcard만 있는 경우 인증 데이터를 사용하지 못하도록 제재
      // withCredentials: true,
    });

    instance.interceptors.response.use((response: AxiosResponse) => {
      return response.data;
    }, (error: AxiosError) => {
      return Promise.reject([error]);
    });

    this.axiosInstance = instance;
  }

  protected call (axiosConfig: AxiosRequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axiosInstance(axiosConfig)
      .then((result: any) => {
        resolve(result);
      })
      .catch((error: Array<any>) => {
        reject(error);
      });
    });
  };
}

export class Rest extends Api {
  constructor (baseUrl: string) {
    super(baseUrl);
  }

  private restConvert (restObject: RestConfig) {
    return Object.assign({}, restObject, {
      url: (() => {
        if (restObject.qs) {
          return `${restObject.url}${stringify(restObject.qs, { addQueryPrefix: true })}`
        } else {
          return restObject.url
        }
      })()
    }) as AxiosRequestConfig;
  }

  public restApi (restObject: RestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      this.call(this.restConvert(restObject))
      .then((result: AxiosResponse) => {
        resolve(result);
      })
      .catch((error: AxiosError) => {
        reject(error);
      })
    })
  }
}

export class Gql extends Api {
  constructor (baseUrl: string) {
    super(baseUrl);
  }

  public gqlApi (gqlObject: GqlConfig): Promise<any> {
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
      .then((result: AxiosGqlResponse) => { 
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
                message: 'System Error'
              })
            }
          }));
        } else {
          resolve(result.data);
        }
      })
      .catch((error: AxiosError) => {
        reject(error);
      })
    })
  }
}