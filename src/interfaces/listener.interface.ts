import { RequestInterface } from './request.interface';

export type THandler = (request: RequestInterface) => unknown;
export enum EMethod {
  GET,
  POST,
  PUT,
  DELETE
}

export interface ListenerInterface {
  start(): Promise<void>;
  stop(): Promise<void>;
  addHandler(method: EMethod, route: string, handler: THandler): void;
}
