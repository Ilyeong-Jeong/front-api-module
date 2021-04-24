export interface IRestObject {
  url    : string,
  method : string,
  header?: string,
  qs    ?: any,
  data  ?: any
}

export interface IGqlObject {
  variables?: object,
  query     : string
}