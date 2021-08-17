export interface RestConfig {
  url    : string,
  method : string,
  header?: string,
  qs    ?: any,
  data  ?: any
}

export interface GqlConfig {
  variables?: object,
  query     : string
}