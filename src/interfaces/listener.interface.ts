import { RequestInterface } from './request.interface';

export type THandler = (req: RequestInterface) => unknown;
export enum EMethod {
  GET='GET',
  POST='POST',
  PUT='PUT',
  DELETE='DELETE'
}

export interface ListenerInterface {
  start(): Promise<void>;
  stop(): Promise<void>;
  addHandler(method: EMethod, route: string, handler: THandler): void;
}
