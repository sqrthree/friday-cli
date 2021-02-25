export enum EndpointProtocol {
  TCP = 'tcp:',
  HTTP = 'http:',
  UNIX = 'unix:',
}

export interface Endpoint {
  protocol: EndpointProtocol
  host: string
  port?: number
}
