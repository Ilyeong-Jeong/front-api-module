export interface IRestConfig {
  url    : string,
  method : string,
  header?: string,
  qs    ?: any,
  data  ?: any
}

export interface IGqlConfig {
  variables?: object,
  query     : string
}